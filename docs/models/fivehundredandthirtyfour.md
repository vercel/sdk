# FiveHundredAndThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyFour } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtyFour = {
  chatId: "<id>",
  events: [],
  inputTokens: 9893.77,
  messageId: "<id>",
  model: "Jetta",
  outputTokens: 5325.14,
  timestamp: 8140.2,
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