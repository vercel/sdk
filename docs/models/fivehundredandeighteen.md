# FiveHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndEighteen } from "@vercel/sdk/models/fourhundredandeightyseven.js";

let value: FiveHundredAndEighteen = {
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
| `next`                               | *models.UserEventPayload518Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload518Previous* | :heavy_check_mark:                   | N/A                                  |
| `userId`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `userName`                           | *string*                             | :heavy_minus_sign:                   | N/A                                  |