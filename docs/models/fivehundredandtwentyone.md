# FiveHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentyOne } from "@vercel/sdk/models/usereventpayload491previous.js";

let value: FiveHundredAndTwentyOne = {
  chatId: "<id>",
  events: [],
  inputTokens: 2174.71,
  messageId: "<id>",
  model: "2",
  outputTokens: 4193.13,
  timestamp: 7507.46,
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