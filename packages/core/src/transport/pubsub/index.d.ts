import { BaseTransport } from '..';
import { AuthClients } from '../../utils/client';
/**
 * Options for configuring the pubsub transport
 */
export interface PubSubOptions {
    /** Name of the subscription to listen on */
    subscriptionName: string | undefined;
    /** Credentials used to identify bot. Defaults to ADC if unspecified. */
    credentials: Promise<AuthClients> | AuthClients | undefined;
}
/**
 * Pubsub-based implementation of transport.
 */
export declare class PubSubTransport extends BaseTransport {
    private options;
    private pubSubClient;
    private subscription;
    constructor(options?: Partial<PubSubOptions>);
    start(): Promise<void>;
    stop(): Promise<void>;
}
