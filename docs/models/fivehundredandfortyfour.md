# FiveHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFortyFour } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFortyFour = {
  next: {
    access: "default",
  },
  previous: {
    access: "unlimited",
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `next`                               | *models.UserEventPayload544Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload544Previous* | :heavy_check_mark:                   | N/A                                  |