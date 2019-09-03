import {HttpCode} from "@modules/core/resources/enums/http.code";

export abstract class HTTPClientError extends Error {
    readonly statusCode!: HttpCode;
    readonly name!: string;

    protected constructor(message: object | string) {
        if (message instanceof Object) {
            super(JSON.stringify(message));
        } else {
            super(message);
        }
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class HTTP400Error extends HTTPClientError {
    readonly statusCode = HttpCode.BadRequest;

    constructor(message: string | object = "Bad Request") {
        super(message);
    }
}

export class HTTP401Error extends HTTPClientError {
    readonly statusCode = HttpCode.Unauthorized;

    constructor(message: string | object = "Unauthorized") {
        super(message);
    }
}

export class HTTP403Error extends HTTPClientError {
    readonly statusCode = HttpCode.Forbidden;

    constructor(message: string | object = "Forbidden") {
        super(message);
    }
}

export class HTTP404Error extends HTTPClientError {
    readonly statusCode = HttpCode.NotFound;

    constructor(message: string | object = "Not found") {
        super(message);
    }
}
