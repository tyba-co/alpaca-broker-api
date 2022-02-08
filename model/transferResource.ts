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
import { IdentifiedResource } from './identifiedResource'
import { TransferResourceAllOf } from './transferResourceAllOf'

export class TransferResource {
  'id': string
  'created_at': Date
  'updated_at': Date
  'type': TransferResource.TypeEnum
  'status': TransferResource.StatusEnum
  'account_id': string
  'reason'?: string | null
  'expires_at': Date
  'amount': string
  'direction': TransferResource.DirectionEnum
  'relationship_id': string
  'additional_information'?: string
  'bank_id': string

  static discriminator: string | undefined = 'type'

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'id',
      baseName: 'id',
      type: 'string'
    },
    {
      name: 'created_at',
      baseName: 'created_at',
      type: 'Date'
    },
    {
      name: 'updated_at',
      baseName: 'updated_at',
      type: 'Date'
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'TransferResource.TypeEnum'
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'TransferResource.StatusEnum'
    },
    {
      name: 'account_id',
      baseName: 'account_id',
      type: 'string'
    },
    {
      name: 'reason',
      baseName: 'reason',
      type: 'string'
    },
    {
      name: 'expires_at',
      baseName: 'expires_at',
      type: 'Date'
    },
    {
      name: 'amount',
      baseName: 'amount',
      type: 'string'
    },
    {
      name: 'direction',
      baseName: 'direction',
      type: 'TransferResource.DirectionEnum'
    },
    {
      name: 'relationship_id',
      baseName: 'relationship_id',
      type: 'string'
    },
    {
      name: 'additional_information',
      baseName: 'additional_information',
      type: 'string'
    },
    {
      name: 'bank_id',
      baseName: 'bank_id',
      type: 'string'
    }
  ]

  static getAttributeTypeMap() {
    return TransferResource.attributeTypeMap
  }
}

export namespace TransferResource {
  export enum TypeEnum {
    Ach = <any>'ach',
    Wire = <any>'wire'
  }
  export enum StatusEnum {
    Queued = <any>'QUEUED',
    Pending = <any>'PENDING',
    Rejected = <any>'REJECTED',
    Approved = <any>'APPROVED',
    Complete = <any>'COMPLETE'
  }
  export enum DirectionEnum {
    Incoming = <any>'INCOMING',
    Outgoing = <any>'OUTGOING'
  }
}
