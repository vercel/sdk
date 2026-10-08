# FourHundredAndSeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyFour } from "@vercel/sdk/models/fourhundredandtwentyseven.js";

let value: FourHundredAndSeventyFour = {
  chatId: "<id>",
  events: [],
  inputTokens: 8081.84,
  messageId: "<id>",
  model: "Model S",
  outputTokens: 1062.02,
  timestamp: 4041.96,
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