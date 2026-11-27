# FiveHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFortyNine } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFortyNine = {
  next: {
    access: "none",
  },
  previous: {
    access: "unlimited",
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `next`                               | *models.UserEventPayload549Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload549Previous* | :heavy_check_mark:                   | N/A                                  |