# FourHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyThree } from "@vercel/sdk/models/fourhundredandnine.js";

let value: FourHundredAndFortyThree = {
  model: "A4",
  useCase: "<value>",
  chatId: "<id>",
  messageId: "<id>",
  inputTokens: 1597.01,
  outputTokens: 656.31,
  timestamp: 334.03,
  events: [],
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