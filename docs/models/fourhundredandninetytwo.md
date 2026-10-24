# FourHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyTwo } from "@vercel/sdk/models/fourhundredandfifty.js";

let value: FourHundredAndNinetyTwo = {
  chatId: "<id>",
  events: [],
  inputTokens: 9229.55,
  messageId: "<id>",
  model: "911",
  outputTokens: 8694.62,
  timestamp: 5403.34,
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