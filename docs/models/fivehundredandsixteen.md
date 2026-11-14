# FiveHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndSixteen } from "@vercel/sdk/models/fourhundredandeightyseven.js";

let value: FiveHundredAndSixteen = {
  chatId: "<id>",
  events: [],
  inputTokens: 9118.75,
  messageId: "<id>",
  model: "Durango",
  outputTokens: 1351.81,
  timestamp: 6820.29,
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