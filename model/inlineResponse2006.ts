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

import { RequestFile } from './models'

export class InlineResponse2006 {
  'client_id'?: string
  'name'?: string
  'description'?: string
  'url'?: string
  /**
   * URL of Terms of Use
   */
  'terms_of_use'?: string
  /**
   * URL of Privacy Policy
   */
  'privacy_policy'?: string
  'status'?: InlineResponse2006.StatusEnum
  'redirect_uri'?: Array<string>
  'live_trading_approved'?: boolean

  static discriminator: string | undefined = undefined

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'client_id',
      baseName: 'client_id',
      type: 'string'
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string'
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'string'
    },
    {
      name: 'url',
      baseName: 'url',
      type: 'string'
    },
    {
      name: 'terms_of_use',
      baseName: 'terms_of_use',
      type: 'string'
    },
    {
      name: 'privacy_policy',
      baseName: 'privacy_policy',
      type: 'string'
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'InlineResponse2006.StatusEnum'
    },
    {
      name: 'redirect_uri',
      baseName: 'redirect_uri',
      type: 'Array<string>'
    },
    {
      name: 'live_trading_approved',
      baseName: 'live_trading_approved',
      type: 'boolean'
    }
  ]

  static getAttributeTypeMap() {
    return InlineResponse2006.attributeTypeMap
  }
}

export namespace InlineResponse2006 {
  export enum StatusEnum {
    Active = <any>'ACTIVE',
    Disabled = <any>'DISABLED'
  }
}
