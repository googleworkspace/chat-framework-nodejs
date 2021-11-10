import {chat_v1} from '@google/chat-sdk';
import {GIFObject, MultiResponse} from 'giphy-api';

function gridItem(item: GIFObject): chat_v1.Schema$GoogleAppsCardV1GridItem {
  const id = JSON.stringify({
    title: item.title,
    url: item.images.original.url,
  });
  return {
    id: id,
    image: {
      imageUri: item.images.fixed_width.url,
      cropStyle: {
        type: 'SQUARE',
      },
    },
  };
}

function images(images: GIFObject[]): chat_v1.Schema$GoogleAppsCardV1Widget {
  const items = images.map(gridItem);
  return {
    grid: {
      columnCount: 3,
      items: items,
      onClick: {
        action: {
          function: 'pick_image',
        },
      },
    },
  };
}

function searchInput(
  keywords: string | undefined
): chat_v1.Schema$GoogleAppsCardV1Widget {
  return {
    textInput: {
      label: 'Keywords',
      type: 'SINGLE_LINE',
      name: 'keywords',
      hintText: 'Enter keywords to search for',
      value: keywords ?? '',
    },
  };
}

function searchButton(): chat_v1.Schema$GoogleAppsCardV1Widget {
  return {
    buttonList: {
      buttons: [
        {
          text: 'Search',
          onClick: {
            action: {
              function: 'search',
            },
          },
          altText: '',
        },
      ],
    },
  };
}

interface PaginationOptions {
  offset: number;
  pageSize: number;
  total: number;
}

function paginationControls({
  offset,
  pageSize,
  total,
}: PaginationOptions): chat_v1.Schema$GoogleAppsCardV1Widget {
  const hasPrevious = offset > 0;
  const hasMore = offset + pageSize < total;
  const previousPageOffset = Math.max(offset - pageSize, 0);
  const nextPageOffset = Math.min(offset + pageSize, total);

  return {
    buttonList: {
      buttons: [
        {
          text: 'previous',
          disabled: !hasPrevious,
          onClick: {
            action: {
              function: 'search',
              parameters: [
                {
                  key: 'offset',
                  value: `${previousPageOffset}`,
                },
              ],
            },
          },
        },
        {
          text: 'next',
          disabled: !hasMore,
          onClick: {
            action: {
              function: 'search',
              parameters: [
                {
                  key: 'offset',
                  value: `${nextPageOffset}`,
                },
              ],
            },
          },
        },
      ],
    },
  };
}

interface SearchDialogOptions {
  keywords?: string;
  results?: MultiResponse;
}

export function buildSearchDialog(
  options: SearchDialogOptions
): chat_v1.Schema$GoogleAppsCardV1Card {
  const widgets = [searchInput(options.keywords), searchButton()];
  if (options.results !== undefined) {
    widgets.push(images(options.results.data));
    widgets.push(
      paginationControls({
        offset: options.results.pagination.offset,
        pageSize: options.results.pagination.count,
        total: options.results.pagination.total_count,
      })
    );
  }
  return {
    sections: [
      {
        widgets: widgets,
      },
    ],
  };
}
