# FiveHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFortyThree } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFortyThree = {
  next: {
    access: "unlimited",
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
| `next`                               | *models.UserEventPayload543Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload543Previous* | :heavy_check_mark:                   | N/A                                  |
| `userId`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `userName`                           | *string*                             | :heavy_minus_sign:                   | N/A                                  |