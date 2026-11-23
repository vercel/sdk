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
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `next`                               | *models.UserEventPayload543Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload543Previous* | :heavy_check_mark:                   | N/A                                  |