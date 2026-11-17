# FiveHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentyThree } from "@vercel/sdk/models/usereventpayload491previous.js";

let value: FiveHundredAndTwentyThree = {
  next: {
    access: "default",
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
| `next`                               | *models.UserEventPayload523Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload523Previous* | :heavy_check_mark:                   | N/A                                  |
| `userId`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `userName`                           | *string*                             | :heavy_minus_sign:                   | N/A                                  |