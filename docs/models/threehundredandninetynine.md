# ThreeHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyNine } from "@vercel/sdk/models/threehundredandsixtytwo.js";

let value: ThreeHundredAndNinetyNine = {
  model: "Altima",
  useCase: "<value>",
  chatId: "<id>",
  messageId: "<id>",
  inputTokens: 8739.93,
  outputTokens: 4833.65,
  timestamp: 6421.09,
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