import { BaseTransport } from '..';
import { AuthClients } from '../../utils/client';
/**
 * Options for configuring the HTTP transport
 */
export interface HttpOptions {
    /** Port number to listen on */
    port: number;
    /** Path to mount, defaults to '/' */
    path: string;
    /** Whether or not app is behind a proxy and should trust X-Forward-For headers */
    trustProxy: boolean;
    /** Project # for bot to validate JWTs. If unspecified and the environment variable
     * GOOGLE_CHAT_PROJECT_NUMBER is unset, no authentication is performed. */
    projectNumber: number | string | undefined;
    /** Credentials used to identify bot. Defaults to ADC if unspecified. */
    credentials: Promise<AuthClients> | AuthClients | undefined;
}
/**
 * Express-based implementation of transport, for web-hook style bots.
 */
export declare class HttpTransport extends BaseTransport {
    /** Express app instance */
    readonly app: import("express-serve-static-core").Express;
    /** Router specific to the bot. Middleware is enabled here instead of the app. */
    readonly router: import("express-serve-static-core").Router;
    private options;
    private server;
    constructor(options?: Partial<HttpOptions>);
    private deferredInit;
    start(): Promise<void>;
    stop(): Promise<void>;
}
