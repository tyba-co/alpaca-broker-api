"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradingApi = exports.TradingApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://broker-api.sandbox.alpaca.markets/v1';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var TradingApiApiKeys;
(function (TradingApiApiKeys) {
})(TradingApiApiKeys = exports.TradingApiApiKeys || (exports.TradingApiApiKeys = {}));
class TradingApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this._defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
            'BasicAuth': new models_2.HttpBasicAuth(),
        };
        this.interceptors = [];
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    set defaultHeaders(defaultHeaders) {
        this._defaultHeaders = defaultHeaders;
    }
    get defaultHeaders() {
        return this._defaultHeaders;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[TradingApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.BasicAuth.username = username;
    }
    set password(password) {
        this.authentications.BasicAuth.password = password;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    /**
     * Attempts to cancel all open orders. A response will be provided for each order that is attempted to be cancelled.
     * @summary Attempts to cancel all open orders. A response will be provided for each order that is attempted to be cancelled.
     * @param accountId Account identifier.
     */
    tradingAccountsAccountIdOrdersDelete(accountId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/trading/accounts/{account_id}/orders'
                .replace('{' + 'account_id' + '}', encodeURIComponent(String(accountId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new Error('Required parameter accountId was null or undefined when calling tradingAccountsAccountIdOrdersDelete.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'DELETE',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    request_1.default(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "Array<InlineResponse207>");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
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
    tradingAccountsAccountIdOrdersGet(accountId, status, limit, after, until, direction, nested, symbols, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/trading/accounts/{account_id}/orders'
                .replace('{' + 'account_id' + '}', encodeURIComponent(String(accountId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new Error('Required parameter accountId was null or undefined when calling tradingAccountsAccountIdOrdersGet.');
            }
            if (status !== undefined) {
                localVarQueryParameters['status'] = models_1.ObjectSerializer.serialize(status, "'open' | 'closed' | 'all'");
            }
            if (limit !== undefined) {
                localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
            }
            if (after !== undefined) {
                localVarQueryParameters['after'] = models_1.ObjectSerializer.serialize(after, "Date");
            }
            if (until !== undefined) {
                localVarQueryParameters['until'] = models_1.ObjectSerializer.serialize(until, "Date");
            }
            if (direction !== undefined) {
                localVarQueryParameters['direction'] = models_1.ObjectSerializer.serialize(direction, "'asc' | 'desc'");
            }
            if (nested !== undefined) {
                localVarQueryParameters['nested'] = models_1.ObjectSerializer.serialize(nested, "boolean");
            }
            if (symbols !== undefined) {
                localVarQueryParameters['symbols'] = models_1.ObjectSerializer.serialize(symbols, "string");
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'GET',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    request_1.default(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "Array<OrderObject>");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    /**
     * Attempts to cancel an open order.
     * @summary Attempts to cancel an open order.
     * @param accountId Account identifier.
     * @param orderId Order identifier.
     */
    tradingAccountsAccountIdOrdersOrderIdDelete(accountId, orderId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/trading/accounts/{account_id}/orders/{order_id}'
                .replace('{' + 'account_id' + '}', encodeURIComponent(String(accountId)))
                .replace('{' + 'order_id' + '}', encodeURIComponent(String(orderId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new Error('Required parameter accountId was null or undefined when calling tradingAccountsAccountIdOrdersOrderIdDelete.');
            }
            // verify required parameter 'orderId' is not null or undefined
            if (orderId === null || orderId === undefined) {
                throw new Error('Required parameter orderId was null or undefined when calling tradingAccountsAccountIdOrdersOrderIdDelete.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'DELETE',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    request_1.default(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    /**
     * Retrieves a single order for the given order_id.
     * @summary Retrieves a single order for the given order_id.
     * @param accountId Account identifier.
     * @param orderId Order identifier.
     */
    tradingAccountsAccountIdOrdersOrderIdGet(accountId, orderId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/trading/accounts/{account_id}/orders/{order_id}'
                .replace('{' + 'account_id' + '}', encodeURIComponent(String(accountId)))
                .replace('{' + 'order_id' + '}', encodeURIComponent(String(orderId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new Error('Required parameter accountId was null or undefined when calling tradingAccountsAccountIdOrdersOrderIdGet.');
            }
            // verify required parameter 'orderId' is not null or undefined
            if (orderId === null || orderId === undefined) {
                throw new Error('Required parameter orderId was null or undefined when calling tradingAccountsAccountIdOrdersOrderIdGet.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'GET',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    request_1.default(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "OrderObject");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    /**
     * Replaces a single order with updated parameters. Each parameter overrides the corresponding attribute of the existing order.
     * @summary Replaces a single order with updated parameters. Each parameter overrides the corresponding attribute of the existing order.
     * @param accountId Account identifier.
     * @param orderId Order identifier.
     * @param patchOrder
     */
    tradingAccountsAccountIdOrdersOrderIdPatch(accountId, orderId, patchOrder, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/trading/accounts/{account_id}/orders/{order_id}'
                .replace('{' + 'account_id' + '}', encodeURIComponent(String(accountId)))
                .replace('{' + 'order_id' + '}', encodeURIComponent(String(orderId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new Error('Required parameter accountId was null or undefined when calling tradingAccountsAccountIdOrdersOrderIdPatch.');
            }
            // verify required parameter 'orderId' is not null or undefined
            if (orderId === null || orderId === undefined) {
                throw new Error('Required parameter orderId was null or undefined when calling tradingAccountsAccountIdOrdersOrderIdPatch.');
            }
            // verify required parameter 'patchOrder' is not null or undefined
            if (patchOrder === null || patchOrder === undefined) {
                throw new Error('Required parameter patchOrder was null or undefined when calling tradingAccountsAccountIdOrdersOrderIdPatch.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'PATCH',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(patchOrder, "PatchOrder")
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    request_1.default(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "OrderObject");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    /**
     * Create an order for an account.
     * @summary Create an order for an account.
     * @param accountId Account identifier.
     * @param createOrder
     */
    tradingAccountsAccountIdOrdersPost(accountId, createOrder, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/trading/accounts/{account_id}/orders'
                .replace('{' + 'account_id' + '}', encodeURIComponent(String(accountId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new Error('Required parameter accountId was null or undefined when calling tradingAccountsAccountIdOrdersPost.');
            }
            // verify required parameter 'createOrder' is not null or undefined
            if (createOrder === null || createOrder === undefined) {
                throw new Error('Required parameter createOrder was null or undefined when calling tradingAccountsAccountIdOrdersPost.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(createOrder, "CreateOrder")
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    request_1.default(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "OrderObject");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
}
exports.TradingApi = TradingApi;
