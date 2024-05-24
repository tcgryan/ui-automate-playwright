//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.0.7.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming



export class ApiError implements IApiError {
    code?: string | undefined;
    message?: string | undefined;

    constructor(data?: IApiError) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.code = _data["code"];
            this.message = _data["message"];
        }
    }

    static fromJS(data: any): ApiError {
        data = typeof data === 'object' ? data : {};
        let result = new ApiError();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["code"] = this.code;
        data["message"] = this.message;
        return data;
    }
}

export interface IApiError {
    code?: string | undefined;
    message?: string | undefined;
}

/** Model for payment types. */
export enum PaymentType {
    _0 = 0,
    _1 = 1,
    _2 = 2,
    _3 = 3,
    _4 = 4,
}

/** The request model for the order submission endpoint. */
export class SubmitOrderRequest implements ISubmitOrderRequest {
    /** "TCG_VisitorKey" cookie value from Dominaria.
User's current session ID, used to tie a user's action before and after log in or account creation for fraud prevention purposes. */
    sessionId?: string | undefined;
    /** The dbo.Cart.CartKey associated with the cart. */
    cartKey?: string | undefined;
    paymentType?: PaymentType;
    /** Total amount to pay. */
    totalAmount?: number;
    /** Partial store credit amount. */
    partialStoreCreditAmount?: number;
    /** The dbo.Addresbook.AddressbookId associated with the cart billing address. */
    billingAddressId?: number | undefined;
    /** The payment nonce from the client containing payment data for one time use. */
    paymentNonce?: string | undefined;
    /** The vault payment token, populated if using a saved payment method. */
    vaultPaymentToken?: string | undefined;
    /** The payment nonce from the client, specifically containing credit card CVV data for verifying vault payment. */
    vaultPaymentCVVNonce?: string | undefined;
    /** Whether the buyer would like to save the payment method to the Braintree vault. */
    savePaymentMethodToVault?: boolean;
    /** PayPal "OrderId" - intended for dbo.Transaction.ExpressToken. */
    payPalToken?: string | undefined;
    /** Intended for dbo.Transaction.CountryCode when payment method is PayPal. */
    payPalCountryCode?: string | undefined;
    /** Client side device data that is autumatically collected and useful for some situations. */
    deviceData?: string | undefined;

    constructor(data?: ISubmitOrderRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.sessionId = _data["sessionId"];
            this.cartKey = _data["cartKey"];
            this.paymentType = _data["paymentType"];
            this.totalAmount = _data["totalAmount"];
            this.partialStoreCreditAmount = _data["partialStoreCreditAmount"];
            this.billingAddressId = _data["billingAddressId"];
            this.paymentNonce = _data["paymentNonce"];
            this.vaultPaymentToken = _data["vaultPaymentToken"];
            this.vaultPaymentCVVNonce = _data["vaultPaymentCVVNonce"];
            this.savePaymentMethodToVault = _data["savePaymentMethodToVault"];
            this.payPalToken = _data["payPalToken"];
            this.payPalCountryCode = _data["payPalCountryCode"];
            this.deviceData = _data["deviceData"];
        }
    }

    static fromJS(data: any): SubmitOrderRequest {
        data = typeof data === 'object' ? data : {};
        let result = new SubmitOrderRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["sessionId"] = this.sessionId;
        data["cartKey"] = this.cartKey;
        data["paymentType"] = this.paymentType;
        data["totalAmount"] = this.totalAmount;
        data["partialStoreCreditAmount"] = this.partialStoreCreditAmount;
        data["billingAddressId"] = this.billingAddressId;
        data["paymentNonce"] = this.paymentNonce;
        data["vaultPaymentToken"] = this.vaultPaymentToken;
        data["vaultPaymentCVVNonce"] = this.vaultPaymentCVVNonce;
        data["savePaymentMethodToVault"] = this.savePaymentMethodToVault;
        data["payPalToken"] = this.payPalToken;
        data["payPalCountryCode"] = this.payPalCountryCode;
        data["deviceData"] = this.deviceData;
        return data;
    }
}

/** The request model for the order submission endpoint. */
export interface ISubmitOrderRequest {
    /** "TCG_VisitorKey" cookie value from Dominaria.
User's current session ID, used to tie a user's action before and after log in or account creation for fraud prevention purposes. */
    sessionId?: string | undefined;
    /** The dbo.Cart.CartKey associated with the cart. */
    cartKey?: string | undefined;
    paymentType?: PaymentType;
    /** Total amount to pay. */
    totalAmount?: number;
    /** Partial store credit amount. */
    partialStoreCreditAmount?: number;
    /** The dbo.Addresbook.AddressbookId associated with the cart billing address. */
    billingAddressId?: number | undefined;
    /** The payment nonce from the client containing payment data for one time use. */
    paymentNonce?: string | undefined;
    /** The vault payment token, populated if using a saved payment method. */
    vaultPaymentToken?: string | undefined;
    /** The payment nonce from the client, specifically containing credit card CVV data for verifying vault payment. */
    vaultPaymentCVVNonce?: string | undefined;
    /** Whether the buyer would like to save the payment method to the Braintree vault. */
    savePaymentMethodToVault?: boolean;
    /** PayPal "OrderId" - intended for dbo.Transaction.ExpressToken. */
    payPalToken?: string | undefined;
    /** Intended for dbo.Transaction.CountryCode when payment method is PayPal. */
    payPalCountryCode?: string | undefined;
    /** Client side device data that is autumatically collected and useful for some situations. */
    deviceData?: string | undefined;
}

export class SubmitOrderResponse implements ISubmitOrderResponse {
    orderId?: number;

    constructor(data?: ISubmitOrderResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.orderId = _data["orderId"];
        }
    }

    static fromJS(data: any): SubmitOrderResponse {
        data = typeof data === 'object' ? data : {};
        let result = new SubmitOrderResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["orderId"] = this.orderId;
        return data;
    }
}

export interface ISubmitOrderResponse {
    orderId?: number;
}

export class SubmitOrderResponseApiResult implements ISubmitOrderResponseApiResult {
    errors?: ApiError[] | undefined;
    results?: SubmitOrderResponse[] | undefined;
    result?: SubmitOrderResponse;

    constructor(data?: ISubmitOrderResponseApiResult) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["errors"])) {
                this.errors = [] as any;
                for (let item of _data["errors"])
                    this.errors!.push(ApiError.fromJS(item));
            }
            if (Array.isArray(_data["results"])) {
                this.results = [] as any;
                for (let item of _data["results"])
                    this.results!.push(SubmitOrderResponse.fromJS(item));
            }
            this.result = _data["result"] ? SubmitOrderResponse.fromJS(_data["result"]) : <any>undefined;
        }
    }

    static fromJS(data: any): SubmitOrderResponseApiResult {
        data = typeof data === 'object' ? data : {};
        let result = new SubmitOrderResponseApiResult();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.errors)) {
            data["errors"] = [];
            for (let item of this.errors)
                data["errors"].push(item.toJSON());
        }
        if (Array.isArray(this.results)) {
            data["results"] = [];
            for (let item of this.results)
                data["results"].push(item.toJSON());
        }
        data["result"] = this.result ? this.result.toJSON() : <any>undefined;
        return data;
    }
}

export interface ISubmitOrderResponseApiResult {
    errors?: ApiError[] | undefined;
    results?: SubmitOrderResponse[] | undefined;
    result?: SubmitOrderResponse;
}