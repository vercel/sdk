# FiveHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtySix } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtySix = {
  next: {
    access: "none",
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
| `next`                               | *models.UserEventPayload536Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload536Previous* | :heavy_check_mark:                   | N/A                                  |
| `userId`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `userName`                           | *string*                             | :heavy_minus_sign:                   | N/A                                  |