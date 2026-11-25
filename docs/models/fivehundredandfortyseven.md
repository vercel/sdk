# FiveHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFortySeven } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFortySeven = {
  next: {
    access: "unlimited",
  },
  previous: {
    access: "none",
  },
  userId: "<id>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `next`                               | *models.UserEventPayload547Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload547Previous* | :heavy_check_mark:                   | N/A                                  |
| `userId`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `userName`                           | *string*                             | :heavy_minus_sign:                   | N/A                                  |