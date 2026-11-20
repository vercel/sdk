# FiveHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyNine } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtyNine = {
  next: {
    access: "unlimited",
  },
  previous: {
    access: "unlimited",
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `next`                               | *models.UserEventPayload539Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload539Previous* | :heavy_check_mark:                   | N/A                                  |