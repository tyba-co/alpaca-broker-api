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

export class TradeActivityAllOf {
    'transaction_time'?: string;
    'type'?: TradeActivityAllOf.TypeEnum;
    'price'?: string;
    'qty'?: string;
    'side'?: TradeActivityAllOf.SideEnum;
    'symbol'?: string;
    'leaves_qty'?: string;
    'order_id'?: string;
    'cum_qty'?: string;
    'order_status'?: TradeActivityAllOf.OrderStatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transaction_time",
            "baseName": "transaction_time",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TradeActivityAllOf.TypeEnum"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string"
        },
        {
            "name": "qty",
            "baseName": "qty",
            "type": "string"
        },
        {
            "name": "side",
            "baseName": "side",
            "type": "TradeActivityAllOf.SideEnum"
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string"
        },
        {
            "name": "leaves_qty",
            "baseName": "leaves_qty",
            "type": "string"
        },
        {
            "name": "order_id",
            "baseName": "order_id",
            "type": "string"
        },
        {
            "name": "cum_qty",
            "baseName": "cum_qty",
            "type": "string"
        },
        {
            "name": "order_status",
            "baseName": "order_status",
            "type": "TradeActivityAllOf.OrderStatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return TradeActivityAllOf.attributeTypeMap;
    }
}

export namespace TradeActivityAllOf {
    export enum TypeEnum {
        Fill = <any> 'fill',
        PartialFill = <any> 'partial_fill'
    }
    export enum SideEnum {
        Buy = <any> 'buy',
        Sell = <any> 'sell'
    }
    export enum OrderStatusEnum {
        New = <any> 'new',
        PartiallyFilled = <any> 'partially_filled',
        Filled = <any> 'filled',
        DoneForDay = <any> 'done_for_day',
        Canceled = <any> 'canceled',
        Expired = <any> 'expired',
        Replaced = <any> 'replaced',
        PendingCancel = <any> 'pending_cancel',
        PendingReplace = <any> 'pending_replace',
        Accepted = <any> 'accepted',
        PendingNew = <any> 'pending_new',
        AcceptedForBidding = <any> 'accepted_for_bidding',
        Stopped = <any> 'stopped',
        Rejected = <any> 'rejected',
        Suspended = <any> 'suspended',
        Calculated = <any> 'calculated'
    }
}