# FiveHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyEight } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtyEight = {
  next: {
    access: "default",
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
| `next`                               | *models.UserEventPayload538Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload538Previous* | :heavy_check_mark:                   | N/A                                  |
| `userId`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `userName`                           | *string*                             | :heavy_minus_sign:                   | N/A                                  |