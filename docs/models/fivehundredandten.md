# FiveHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTen } from "@vercel/sdk/models/usereventpayload470actortype.js";

let value: FiveHundredAndTen = {
  chatId: "<id>",
  events: [],
  inputTokens: 5468.49,
  messageId: "<id>",
  model: "Challenger",
  outputTokens: 3408.98,
  timestamp: 5959.08,
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