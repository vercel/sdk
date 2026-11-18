# FiveHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyTwo } from "@vercel/sdk/models/usereventpayload499next.js";

let value: FiveHundredAndThirtyTwo = {
  next: {
    access: "limited",
    limit: "<value>",
  },
  previous: {
    access: "default",
  },
  userId: "<id>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `next`                               | *models.UserEventPayload532Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload532Previous* | :heavy_check_mark:                   | N/A                                  |
| `userId`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `userName`                           | *string*                             | :heavy_minus_sign:                   | N/A                                  |