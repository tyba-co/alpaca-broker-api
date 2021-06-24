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

import { RequestFile } from './models';

export class InlineResponse2002 {
    'timestamp'?: string;
    'is_open'?: boolean;
    'next_open'?: string;
    'next_close'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string"
        },
        {
            "name": "is_open",
            "baseName": "is_open",
            "type": "boolean"
        },
        {
            "name": "next_open",
            "baseName": "next_open",
            "type": "string"
        },
        {
            "name": "next_close",
            "baseName": "next_close",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2002.attributeTypeMap;
    }
}

