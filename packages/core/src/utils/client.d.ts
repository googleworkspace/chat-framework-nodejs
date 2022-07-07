import {
  BaseExternalAccountClient,
  Compute,
  JWT,
  OAuth2Client,
  UserRefreshClient,
} from 'googleapis-common';
import {GoogleAuth, Impersonated} from 'google-auth-library';
export declare const DEFAULT_AUTH: GoogleAuth;
export declare const chatApiClient: import('@googleapis/chat').chat_v1.Chat;
export declare type AuthClients =
  | string
  | OAuth2Client
  | JWT
  | Compute
  | UserRefreshClient
  | BaseExternalAccountClient
  | GoogleAuth
  | Impersonated
  | undefined;
