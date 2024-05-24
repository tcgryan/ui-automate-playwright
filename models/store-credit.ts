//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.0.7.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming



export class StoreCreditQueue implements IStoreCreditQueue {
    storeCreditQueueId?: number;
    userId?: number;
    amt?: number;
    note?: string | undefined;
    createdByUserId?: number;
    createdAt?: Date;
    updatedByUserId?: number | undefined;
    updatedAt?: Date | undefined;
    storeCreditReasonId?: number | undefined;
    storeCreditQueueStatusId?: number | undefined;
    orderId?: number | undefined;
    authorizationExpiresAt?: Date | undefined;

    constructor(data?: IStoreCreditQueue) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.storeCreditQueueId = _data["storeCreditQueueId"];
            this.userId = _data["userId"];
            this.amt = _data["amt"];
            this.note = _data["note"];
            this.createdByUserId = _data["createdByUserId"];
            this.createdAt = _data["createdAt"] ? new Date(_data["createdAt"].toString()) : <any>undefined;
            this.updatedByUserId = _data["updatedByUserId"];
            this.updatedAt = _data["updatedAt"] ? new Date(_data["updatedAt"].toString()) : <any>undefined;
            this.storeCreditReasonId = _data["storeCreditReasonId"];
            this.storeCreditQueueStatusId = _data["storeCreditQueueStatusId"];
            this.orderId = _data["orderId"];
            this.authorizationExpiresAt = _data["authorizationExpiresAt"] ? new Date(_data["authorizationExpiresAt"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): StoreCreditQueue {
        data = typeof data === 'object' ? data : {};
        let result = new StoreCreditQueue();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["storeCreditQueueId"] = this.storeCreditQueueId;
        data["userId"] = this.userId;
        data["amt"] = this.amt;
        data["note"] = this.note;
        data["createdByUserId"] = this.createdByUserId;
        data["createdAt"] = this.createdAt ? this.createdAt.toISOString() : <any>undefined;
        data["updatedByUserId"] = this.updatedByUserId;
        data["updatedAt"] = this.updatedAt ? this.updatedAt.toISOString() : <any>undefined;
        data["storeCreditReasonId"] = this.storeCreditReasonId;
        data["storeCreditQueueStatusId"] = this.storeCreditQueueStatusId;
        data["orderId"] = this.orderId;
        data["authorizationExpiresAt"] = this.authorizationExpiresAt ? this.authorizationExpiresAt.toISOString() : <any>undefined;
        return data;
    }
}

export interface IStoreCreditQueue {
    storeCreditQueueId?: number;
    userId?: number;
    amt?: number;
    note?: string | undefined;
    createdByUserId?: number;
    createdAt?: Date;
    updatedByUserId?: number | undefined;
    updatedAt?: Date | undefined;
    storeCreditReasonId?: number | undefined;
    storeCreditQueueStatusId?: number | undefined;
    orderId?: number | undefined;
    authorizationExpiresAt?: Date | undefined;
}

export class StoreCreditQueueApiResult implements IStoreCreditQueueApiResult {
    errors?: ApiError[] | undefined;
    results?: StoreCreditQueue[] | undefined;
    result?: StoreCreditQueue;

    constructor(data?: IStoreCreditQueueApiResult) {
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
                    this.results!.push(StoreCreditQueue.fromJS(item));
            }
            this.result = _data["result"] ? StoreCreditQueue.fromJS(_data["result"]) : <any>undefined;
        }
    }

    static fromJS(data: any): StoreCreditQueueApiResult {
        data = typeof data === 'object' ? data : {};
        let result = new StoreCreditQueueApiResult();
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

export interface IStoreCreditQueueApiResult {
    errors?: ApiError[] | undefined;
    results?: StoreCreditQueue[] | undefined;
    result?: StoreCreditQueue;
}

export class DecimalApiResult implements IDecimalApiResult {
    errors?: ApiError[] | undefined;
    results?: number[] | undefined;
    result?: number;

    constructor(data?: IDecimalApiResult) {
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
                    this.results!.push(item);
            }
            this.result = _data["result"];
        }
    }

    static fromJS(data: any): DecimalApiResult {
        data = typeof data === 'object' ? data : {};
        let result = new DecimalApiResult();
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
                data["results"].push(item);
        }
        data["result"] = this.result;
        return data;
    }
}

export interface IDecimalApiResult {
    errors?: ApiError[] | undefined;
    results?: number[] | undefined;
    result?: number;
}

export class StringApiResult implements IStringApiResult {
    errors?: ApiError[] | undefined;
    results?: string[] | undefined;
    result?: string | undefined;

    constructor(data?: IStringApiResult) {
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
                    this.results!.push(item);
            }
            this.result = _data["result"];
        }
    }

    static fromJS(data: any): StringApiResult {
        data = typeof data === 'object' ? data : {};
        let result = new StringApiResult();
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
                data["results"].push(item);
        }
        data["result"] = this.result;
        return data;
    }
}

export interface IStringApiResult {
    errors?: ApiError[] | undefined;
    results?: string[] | undefined;
    result?: string | undefined;
}

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