# FiveHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFortyTwo } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFortyTwo = {
  next: {
    access: "unlimited",
  },
  previous: {
    access: "limited",
    limit: "<value>",
  },
  userId: "<id>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `next`                               | *models.UserEventPayload542Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload542Previous* | :heavy_check_mark:                   | N/A                                  |
| `userId`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `userName`                           | *string*                             | :heavy_minus_sign:                   | N/A                                  |