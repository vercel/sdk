# FourHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyOne } from "@vercel/sdk/models/fourhundredandfourteen.js";

let value: FourHundredAndSixtyOne = {
  chatId: "<id>",
  events: [],
  inputTokens: 3433.07,
  messageId: "<id>",
  model: "XC90",
  outputTokens: 3125.77,
  timestamp: 4057.61,
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