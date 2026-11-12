# FiveHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFourteen } from "@vercel/sdk/models/usereventpayload474actortype.js";

let value: FiveHundredAndFourteen = {
  chatId: "<id>",
  events: [],
  inputTokens: 5630.18,
  messageId: "<id>",
  model: "Grand Cherokee",
  outputTokens: 9611.07,
  timestamp: 6767.3,
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