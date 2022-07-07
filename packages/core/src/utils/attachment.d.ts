/// <reference types="node" />
import {chat_v1} from '@googleapis/chat';
import {AuthClients} from './client';
import {Readable} from 'stream';
/**
 * Additional options when fetching an attachment
 */
export interface FetchOptions {
  /** Override the credentials used in the request. Bot identity is used by default. */
  auth?: AuthClients;
}
/**
 * Fetch an attachment. Currently only media downloads are supported. Drive attachments
 * can not be downloaded as the bot is not automatically added to the ACL. However, the Drive
 * API can be used with end user oauth credentials if the bot requests access.
 *
 * @param attachment - Attachment info from chat message
 * @param options
 * @return Readable stream.
 */
export declare function fetchAttachment(
  attachment: chat_v1.Schema$Attachment,
  options?: Partial<FetchOptions>
): Promise<Readable>;
