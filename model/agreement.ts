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

export class Agreement {
  /**
   * - margin_agreement: Alpaca Margin Agreement - account_agreement: Alpaca Account Agreement - customer_agreement: Alpaca Customer Agreement
   */
  'agreement': Agreement.AgreementEnum
  'signed_at': string
  'ip_address': string

  static discriminator: string | undefined = undefined

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'agreement',
      baseName: 'agreement',
      type: 'Agreement.AgreementEnum'
    },
    {
      name: 'signed_at',
      baseName: 'signed_at',
      type: 'string'
    },
    {
      name: 'ip_address',
      baseName: 'ip_address',
      type: 'string'
    }
  ]

  static getAttributeTypeMap() {
    return Agreement.attributeTypeMap
  }
}

export namespace Agreement {
  export enum AgreementEnum {
    MarginAgreement = <any>'margin_agreement',
    AccountAgreement = <any>'account_agreement',
    CustomerAgreement = <any>'customer_agreement'
  }
}
