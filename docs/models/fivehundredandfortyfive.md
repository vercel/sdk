# FiveHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFortyFive } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFortyFive = {
  chatId: "<id>",
  events: [],
  inputTokens: 3909.82,
  messageId: "<id>",
  model: "Beetle",
  outputTokens: 7263.28,
  timestamp: 1385.2,
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