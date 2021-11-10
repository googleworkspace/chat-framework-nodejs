import {chat_v1} from '@google/chat-sdk';

export interface ImageInfo {
  url: string;
  title: string; // TODO - use for altText, but not showing in schema
}

export function buildImageCard(imageInfo: ImageInfo): chat_v1.Schema$Card {
  return {
    sections: [
      {
        widgets: [
          {
            image: {
              imageUrl: imageInfo.url,
            },
          },
        ],
      },
    ],
  };
}
