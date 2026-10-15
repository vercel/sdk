# FourHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyThree } from "@vercel/sdk/models/env.js";

let value: FourHundredAndEightyThree = {
  chatId: "<id>",
  events: [],
  inputTokens: 2025.64,
  messageId: "<id>",
  model: "Fortwo",
  outputTokens: 1452.87,
  timestamp: 5677.53,
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