import { EventHandler } from '@google/chat-sdk';
export interface DialogflowOptions {
    projectId: string;
    languageCode: string;
}
export declare function dialogflowHandler(options: DialogflowOptions): EventHandler;
