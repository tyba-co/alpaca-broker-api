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
/// <reference types="node" />
import http from 'http';
import { CreateOrder } from '../model/createOrder';
import { InlineResponse207 } from '../model/inlineResponse207';
import { OrderObject } from '../model/orderObject';
import { PatchOrder } from '../model/patchOrder';
import { Position } from '../model/position';
import { Authentication, Interceptor } from '../model/models';
import { HttpBasicAuth } from '../model/models';
export declare enum TradingApiApiKeys {
}
export declare class TradingApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        BasicAuth: HttpBasicAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TradingApiApiKeys, value: string): void;
    set username(username: string);
    set password(password: string);
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Attempts to cancel an open order.
     * @summary Attempts to cancel an open order.
     * @param accountId Account identifier.
     * @param orderId Order identifier.
     */
    deleteOrder(accountId: string, orderId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     * Attempts to cancel all open orders. A response will be provided for each order that is attempted to be cancelled.
     * @summary Attempts to cancel all open orders. A response will be provided for each order that is attempted to be cancelled.
     * @param accountId Account identifier.
     */
    deleteOrders(accountId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<InlineResponse207>;
    }>;
    /**
     * Retrieves a single order for the given order_id.
     * @summary Retrieves a single order for the given order_id.
     * @param accountId Account identifier.
     * @param orderId Order identifier.
     */
    getOrder(accountId: string, orderId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OrderObject;
    }>;
    /**
     * Retrieves a list of orders for the account, filtered by the supplied query parameters.
     * @summary Retrieves a list of orders for the account, filtered by the supplied query parameters.
     * @param accountId Account identifier.
     * @param status Status of the orders to list.
     * @param limit The maximum number of orders in response.
     * @param after The response will include only ones submitted after this timestamp (exclusive.)
     * @param until The response will include only ones submitted until this timestamp (exclusive.)
     * @param direction The chronological order of response based on the submission time. asc or desc. Defaults to desc.
     * @param nested If true, the result will roll up multi-leg orders under the legs field of primary order.
     * @param symbols A comma-separated list of symbols to filter by.
     */
    getOrders(accountId: string, status?: 'open' | 'closed' | 'all', limit?: number, after?: Date, until?: Date, direction?: 'asc' | 'desc', nested?: boolean, symbols?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<OrderObject>;
    }>;
    /**
     *
     * @summary List open positions for an account
     * @param accountId Account identifier.
     */
    getPositions(accountId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Position>;
    }>;
    /**
     * Replaces a single order with updated parameters. Each parameter overrides the corresponding attribute of the existing order.
     * @summary Replaces a single order with updated parameters. Each parameter overrides the corresponding attribute of the existing order.
     * @param accountId Account identifier.
     * @param orderId Order identifier.
     * @param patchOrder
     */
    patchOrder(accountId: string, orderId: string, patchOrder: PatchOrder, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OrderObject;
    }>;
    /**
     * Create an order for an account.
     * @summary Create an order for an account.
     * @param accountId Account identifier.
     * @param createOrder
     */
    postOrders(accountId: string, createOrder: CreateOrder, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OrderObject;
    }>;
}
