# FourHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEighty } from "@vercel/sdk/models/fourhundredandthirtyfour.js";

let value: FourHundredAndEighty = {
  chatId: "<id>",
  events: [],
  inputTokens: 3830.82,
  messageId: "<id>",
  model: "Land Cruiser",
  outputTokens: 7840.57,
  timestamp: 3666.17,
  useCase: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `chatId`                               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `events`                               | [models.Events](../models/events.md)[] | :heavy_check_mark:                     | N/A                                    |
| `inputTokens`                          | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `messageId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `model`                                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `outputTokens`                         | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `timestamp`                            | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `useCase`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |