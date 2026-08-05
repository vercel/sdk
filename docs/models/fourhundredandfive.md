# FourHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFive } from "@vercel/sdk/models/threehundredandsixtyseven.js";

let value: FourHundredAndFive = {
  model: "XC90",
  useCase: "<value>",
  chatId: "<id>",
  messageId: "<id>",
  inputTokens: 9174.05,
  outputTokens: 9642.76,
  timestamp: 5235.89,
  events: [
    {
      eventId: "<id>",
      modelId: "<id>",
      inputTokens: 8264.37,
      outputTokens: 921.19,
      totalTokens: 4741.19,
      cacheCreationInputTokens: 6106.82,
      cacheReadInputTokens: 9845.35,
      timestamp: "<value>",
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `model`                                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `useCase`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `chatId`                               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `messageId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `inputTokens`                          | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `outputTokens`                         | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `timestamp`                            | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `events`                               | [models.Events](../models/events.md)[] | :heavy_check_mark:                     | N/A                                    |