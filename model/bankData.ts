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

export class BankData {
  'name': string
  'bank_code': string
  'bank_code_type': BankData.BankCodeTypeEnum
  'country'?: string
  'state_province'?: string
  'postal_code'?: string
  'city'?: string
  'street_address'?: string
  'account_number': string

  static discriminator: string | undefined = undefined

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'name',
      baseName: 'name',
      type: 'string'
    },
    {
      name: 'bank_code',
      baseName: 'bank_code',
      type: 'string'
    },
    {
      name: 'bank_code_type',
      baseName: 'bank_code_type',
      type: 'BankData.BankCodeTypeEnum'
    },
    {
      name: 'country',
      baseName: 'country',
      type: 'string'
    },
    {
      name: 'state_province',
      baseName: 'state_province',
      type: 'string'
    },
    {
      name: 'postal_code',
      baseName: 'postal_code',
      type: 'string'
    },
    {
      name: 'city',
      baseName: 'city',
      type: 'string'
    },
    {
      name: 'street_address',
      baseName: 'street_address',
      type: 'string'
    },
    {
      name: 'account_number',
      baseName: 'account_number',
      type: 'string'
    }
  ]

  static getAttributeTypeMap() {
    return BankData.attributeTypeMap
  }
}

export namespace BankData {
  export enum BankCodeTypeEnum {
    Aba = <any>'ABA',
    Bic = <any>'BIC'
  }
}
