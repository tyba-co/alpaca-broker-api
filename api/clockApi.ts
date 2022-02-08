/**
 * Alpaca Broker API
 * Open brokerage accounts, enable commission-free trading, and manage the ongoing user experience with Alpaca Broker API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest from 'request'
import http from 'http'

/* tslint:disable:no-unused-locals */
import { InlineResponse2002 } from '../model/inlineResponse2002'

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models'
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models'

import { HttpError, RequestFile } from './apis'

const defaultBasePath = 'https://broker-api.sandbox.alpaca.markets/v1'

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ClockApiApiKeys {}

export class ClockApi {
  protected _basePath = defaultBasePath
  protected _defaultHeaders: any = {}
  protected _useQuerystring = false

  protected authentications = {
    default: <Authentication>new VoidAuth(),
    BasicAuth: new HttpBasicAuth()
  }

  protected interceptors: Interceptor[] = []

  constructor(basePath?: string)
  constructor(username: string, password: string, basePath?: string)
  constructor(basePathOrUsername: string, password?: string, basePath?: string) {
    if (password) {
      this.username = basePathOrUsername
      this.password = password
      if (basePath) {
        this.basePath = basePath
      }
    } else {
      if (basePathOrUsername) {
        this.basePath = basePathOrUsername
      }
    }
  }

  set useQuerystring(value: boolean) {
    this._useQuerystring = value
  }

  set basePath(basePath: string) {
    this._basePath = basePath
  }

  set defaultHeaders(defaultHeaders: any) {
    this._defaultHeaders = defaultHeaders
  }

  get defaultHeaders() {
    return this._defaultHeaders
  }

  get basePath() {
    return this._basePath
  }

  public setDefaultAuthentication(auth: Authentication) {
    this.authentications.default = auth
  }

  public setApiKey(key: ClockApiApiKeys, value: string) {
    ;(this.authentications as any)[ClockApiApiKeys[key]].apiKey = value
  }

  set username(username: string) {
    this.authentications.BasicAuth.username = username
  }

  set password(password: string) {
    this.authentications.BasicAuth.password = password
  }

  public addInterceptor(interceptor: Interceptor) {
    this.interceptors.push(interceptor)
  }

  /**
   *
   * @summary Query market clock
   */
  public async getClock(
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: InlineResponse2002 }> {
    const localVarPath = this.basePath + '/clock'
    const localVarQueryParameters: any = {}
    const localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders)
    const produces = ['application/json']
    // give precedence to 'application/json'
    if (produces.indexOf('application/json') >= 0) {
      localVarHeaderParams.Accept = 'application/json'
    } else {
      localVarHeaderParams.Accept = produces.join(',')
    }
    const localVarFormParams: any = {}

    ;(<any>Object).assign(localVarHeaderParams, options.headers)

    const localVarUseFormData = false

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true
    }

    let authenticationPromise = Promise.resolve()
    if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.BasicAuth.applyToRequest(localVarRequestOptions)
      )
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    )

    let interceptorPromise = authenticationPromise
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions))
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          ;(<any>localVarRequestOptions).formData = localVarFormParams
        } else {
          localVarRequestOptions.form = localVarFormParams
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: InlineResponse2002 }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error)
          } else {
            body = ObjectSerializer.deserialize(body, 'InlineResponse2002')
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
              resolve({ response: response, body: body })
            } else {
              reject(new HttpError(response, body, response.statusCode))
            }
          }
        })
      })
    })
  }
}
