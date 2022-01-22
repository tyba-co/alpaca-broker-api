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

/**
 * - identity_verification:   identity verification document - address_verification:   address verification document - date_of_birth_verification:   date of birth verification document - tax_id_verification:   tax ID verification document - account_approval_letter:   407 approval letter - cip_result:   initial CIP result
 */
export enum DocumentType {
  IdentityVerification = <any>'identity_verification',
  AddressVerification = <any>'address_verification',
  DateOfBirthVerification = <any>'date_of_birth_verification',
  TaxIdVerification = <any>'tax_id_verification',
  AccountApprovalLetter = <any>'account_approval_letter',
  CipResult = <any>'cip_result',
  W8Ben = <any>'w8ben'
}
