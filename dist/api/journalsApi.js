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
exports.JournalsApi = exports.JournalsApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://broker-api.sandbox.alpaca.markets/v1';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var JournalsApiApiKeys;
(function (JournalsApiApiKeys) {
})(JournalsApiApiKeys = exports.JournalsApiApiKeys || (exports.JournalsApiApiKeys = {}));
class JournalsApi {
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
        this.authentications[JournalsApiApiKeys[key]].apiKey = value;
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
     * Query Params Rules: - `since` required if `until` specified - `since_id` required if `until_id` specified - `since` and `since_id` can’t be used at the same time Behavior: - if `since` or `since_id` not specified this will not return any historic data - if `until` or `until_id` reached stream will end (status 200)
     * @summary Subscribe to journal events (SSE).
     * @param since
     * @param until
     * @param sinceId
     * @param untilId
     */
    eventsJournalsStatusGet(since, until, sinceId, untilId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/events/journals/status';
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
            if (since !== undefined) {
                localVarQueryParameters['since'] = models_1.ObjectSerializer.serialize(since, "Date");
            }
            if (until !== undefined) {
                localVarQueryParameters['until'] = models_1.ObjectSerializer.serialize(until, "Date");
            }
            if (sinceId !== undefined) {
                localVarQueryParameters['since_id'] = models_1.ObjectSerializer.serialize(sinceId, "number");
            }
            if (untilId !== undefined) {
                localVarQueryParameters['until_id'] = models_1.ObjectSerializer.serialize(untilId, "number");
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
                            body = models_1.ObjectSerializer.deserialize(body, "InlineResponse2006");
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
     *
     * @summary Return a list of requested journals.
     * @param after by settle_date
     * @param before by settle_date
     * @param entryType
     * @param status
     * @param toAccount
     * @param fromAccount
     */
    journalsGet(after, before, entryType, status, toAccount, fromAccount, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/journals';
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
            // verify required parameter 'after' is not null or undefined
            if (after === null || after === undefined) {
                throw new Error('Required parameter after was null or undefined when calling journalsGet.');
            }
            // verify required parameter 'before' is not null or undefined
            if (before === null || before === undefined) {
                throw new Error('Required parameter before was null or undefined when calling journalsGet.');
            }
            // verify required parameter 'entryType' is not null or undefined
            if (entryType === null || entryType === undefined) {
                throw new Error('Required parameter entryType was null or undefined when calling journalsGet.');
            }
            if (after !== undefined) {
                localVarQueryParameters['after'] = models_1.ObjectSerializer.serialize(after, "string");
            }
            if (before !== undefined) {
                localVarQueryParameters['before'] = models_1.ObjectSerializer.serialize(before, "string");
            }
            if (status !== undefined) {
                localVarQueryParameters['status'] = models_1.ObjectSerializer.serialize(status, "'pending' | 'canceled' | 'executed'");
            }
            if (entryType !== undefined) {
                localVarQueryParameters['entry_type'] = models_1.ObjectSerializer.serialize(entryType, "'JNLC' | 'JNLS'");
            }
            if (toAccount !== undefined) {
                localVarQueryParameters['to_account'] = models_1.ObjectSerializer.serialize(toAccount, "string");
            }
            if (fromAccount !== undefined) {
                localVarQueryParameters['from_account'] = models_1.ObjectSerializer.serialize(fromAccount, "string");
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
                            body = models_1.ObjectSerializer.deserialize(body, "JournalJNLC | JournalJNLS");
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
     * You can cancel journals while they are in the pending status. An attempt to cancel already-executed journals will return an error.
     * @summary Cancel a pending journal.
     * @param journalId
     */
    journalsJournalIdDelete(journalId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/journals/{journal_id}'
                .replace('{' + 'journal_id' + '}', encodeURIComponent(String(journalId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            let localVarFormParams = {};
            // verify required parameter 'journalId' is not null or undefined
            if (journalId === null || journalId === undefined) {
                throw new Error('Required parameter journalId was null or undefined when calling journalsJournalIdDelete.');
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
     * A journal can be JNLC (move cash) or JNLS (move shares), dictated by `entry_type`. Generally, journal requests are subject to approval and starts from the `pending` status. The status changes are propagated through the Event API. Under certain conditions agreed for the partner, such journal transactions that meet the criteria are executed right away.
     * @summary Request a journal.
     * @param inlineObject
     */
    journalsPost(inlineObject, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/journals';
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
            // verify required parameter 'inlineObject' is not null or undefined
            if (inlineObject === null || inlineObject === undefined) {
                throw new Error('Required parameter inlineObject was null or undefined when calling journalsPost.');
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
                body: models_1.ObjectSerializer.serialize(inlineObject, "InlineObject")
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
                            body = models_1.ObjectSerializer.deserialize(body, "JournalJNLC | JournalJNLS");
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
exports.JournalsApi = JournalsApi;
