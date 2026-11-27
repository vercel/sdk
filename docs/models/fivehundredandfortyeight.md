# FiveHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFortyEight } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFortyEight = {
  next: {
    access: "limited",
    limit: "<value>",
  },
  previous: {
    access: "unlimited",
  },
  userId: "<id>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `next`                               | *models.UserEventPayload548Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload548Previous* | :heavy_check_mark:                   | N/A                                  |
| `userId`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `userName`                           | *string*                             | :heavy_minus_sign:                   | N/A                                  |