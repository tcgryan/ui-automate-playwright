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

export class ProblemDetails implements IProblemDetails {
    type?: string | undefined;
    title?: string | undefined;
    status?: number | undefined;
    detail?: string | undefined;
    instance?: string | undefined;

    [key: string]: any;

    constructor(data?: IProblemDetails) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.type = _data["type"];
            this.title = _data["title"];
            this.status = _data["status"];
            this.detail = _data["detail"];
            this.instance = _data["instance"];
        }
    }

    static fromJS(data: any): ProblemDetails {
        data = typeof data === 'object' ? data : {};
        let result = new ProblemDetails();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["type"] = this.type;
        data["title"] = this.title;
        data["status"] = this.status;
        data["detail"] = this.detail;
        data["instance"] = this.instance;
        return data;
    }
}

export interface IProblemDetails {
    type?: string | undefined;
    title?: string | undefined;
    status?: number | undefined;
    detail?: string | undefined;
    instance?: string | undefined;

    [key: string]: any;
}

/** An object representing an AddressBook entry. */
export class UserAddressBook implements IUserAddressBook {
    /** Gets or sets the unique ID of this AddressBook. */
    id?: number;
    /** Gets or sets User's unique identifier in system. */
    externalUserId?: string;
    /** Gets or sets the First Name associated with this address. */
    firstName?: string | undefined;
    /** Gets or sets the Last Name associated with this address. */
    lastName?: string | undefined;
    /** Gets or sets line 1 of the street address. */
    addressLine1?: string | undefined;
    /** Gets or sets line 2 of the street address. */
    addressLine2?: string | undefined;
    /** Gets or sets the city for this address. */
    city?: string | undefined;
    /** Gets or sets the state/province/region for this address. */
    stateProvinceRegion?: string | undefined;
    /** Gets or sets the zip/postal code for this address. */
    zipCode?: string | undefined;
    /** Gets or sets the country for this address. */
    countryCode?: string | undefined;
    /** Gets or sets the phone number for this address. */
    phone?: string | undefined;
    /** Gets or sets the time this address book was created in UTC. */
    createdAt?: Date;
    /** Gets or sets the last time this address was used in UTC. */
    lastUsedAt?: Date | undefined;
    /** Gets or sets a value indicating whether this address has been verified by the EasyPost API. */
    isEasyPostVerified?: boolean;
    /** Gets or sets the EasyPost Id for this address. */
    easyPostShippingAddressId?: string | undefined;
    /** Gets or sets if this is the user's default address. */
    isDefaultAddress?: boolean;

    constructor(data?: IUserAddressBook) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.externalUserId = _data["externalUserId"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.addressLine1 = _data["addressLine1"];
            this.addressLine2 = _data["addressLine2"];
            this.city = _data["city"];
            this.stateProvinceRegion = _data["stateProvinceRegion"];
            this.zipCode = _data["zipCode"];
            this.countryCode = _data["countryCode"];
            this.phone = _data["phone"];
            this.createdAt = _data["createdAt"] ? new Date(_data["createdAt"].toString()) : <any>undefined;
            this.lastUsedAt = _data["lastUsedAt"] ? new Date(_data["lastUsedAt"].toString()) : <any>undefined;
            this.isEasyPostVerified = _data["isEasyPostVerified"];
            this.easyPostShippingAddressId = _data["easyPostShippingAddressId"];
            this.isDefaultAddress = _data["isDefaultAddress"];
        }
    }

    static fromJS(data: any): UserAddressBook {
        data = typeof data === 'object' ? data : {};
        let result = new UserAddressBook();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["externalUserId"] = this.externalUserId;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["addressLine1"] = this.addressLine1;
        data["addressLine2"] = this.addressLine2;
        data["city"] = this.city;
        data["stateProvinceRegion"] = this.stateProvinceRegion;
        data["zipCode"] = this.zipCode;
        data["countryCode"] = this.countryCode;
        data["phone"] = this.phone;
        data["createdAt"] = this.createdAt ? this.createdAt.toISOString() : <any>undefined;
        data["lastUsedAt"] = this.lastUsedAt ? this.lastUsedAt.toISOString() : <any>undefined;
        data["isEasyPostVerified"] = this.isEasyPostVerified;
        data["easyPostShippingAddressId"] = this.easyPostShippingAddressId;
        data["isDefaultAddress"] = this.isDefaultAddress;
        return data;
    }
}

/** An object representing an AddressBook entry. */
export interface IUserAddressBook {
    /** Gets or sets the unique ID of this AddressBook. */
    id?: number;
    /** Gets or sets User's unique identifier in system. */
    externalUserId?: string;
    /** Gets or sets the First Name associated with this address. */
    firstName?: string | undefined;
    /** Gets or sets the Last Name associated with this address. */
    lastName?: string | undefined;
    /** Gets or sets line 1 of the street address. */
    addressLine1?: string | undefined;
    /** Gets or sets line 2 of the street address. */
    addressLine2?: string | undefined;
    /** Gets or sets the city for this address. */
    city?: string | undefined;
    /** Gets or sets the state/province/region for this address. */
    stateProvinceRegion?: string | undefined;
    /** Gets or sets the zip/postal code for this address. */
    zipCode?: string | undefined;
    /** Gets or sets the country for this address. */
    countryCode?: string | undefined;
    /** Gets or sets the phone number for this address. */
    phone?: string | undefined;
    /** Gets or sets the time this address book was created in UTC. */
    createdAt?: Date;
    /** Gets or sets the last time this address was used in UTC. */
    lastUsedAt?: Date | undefined;
    /** Gets or sets a value indicating whether this address has been verified by the EasyPost API. */
    isEasyPostVerified?: boolean;
    /** Gets or sets the EasyPost Id for this address. */
    easyPostShippingAddressId?: string | undefined;
    /** Gets or sets if this is the user's default address. */
    isDefaultAddress?: boolean;
}

export class UserAddressBookApiResult implements IUserAddressBookApiResult {
    errors?: ApiError[] | undefined;
    results?: UserAddressBook[] | undefined;
    result?: UserAddressBook;

    constructor(data?: IUserAddressBookApiResult) {
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
                    this.results!.push(UserAddressBook.fromJS(item));
            }
            this.result = _data["result"] ? UserAddressBook.fromJS(_data["result"]) : <any>undefined;
        }
    }

    static fromJS(data: any): UserAddressBookApiResult {
        data = typeof data === 'object' ? data : {};
        let result = new UserAddressBookApiResult();
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

export interface IUserAddressBookApiResult {
    errors?: ApiError[] | undefined;
    results?: UserAddressBook[] | undefined;
    result?: UserAddressBook;
}

export class UserAddressBookListApiResult implements IUserAddressBookListApiResult {
    errors?: ApiError[] | undefined;
    results?: UserAddressBook[][] | undefined;
    result?: UserAddressBook[] | undefined;

    constructor(data?: IUserAddressBookListApiResult) {
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
            if (Array.isArray(_data["result"])) {
                this.result = [] as any;
                for (let item of _data["result"])
                    this.result!.push(UserAddressBook.fromJS(item));
            }
        }
    }

    static fromJS(data: any): UserAddressBookListApiResult {
        data = typeof data === 'object' ? data : {};
        let result = new UserAddressBookListApiResult();
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
        if (Array.isArray(this.result)) {
            data["result"] = [];
            for (let item of this.result)
                data["result"].push(item.toJSON());
        }
        return data;
    }
}

export interface IUserAddressBookListApiResult {
    errors?: ApiError[] | undefined;
    results?: UserAddressBook[][] | undefined;
    result?: UserAddressBook[] | undefined;
}