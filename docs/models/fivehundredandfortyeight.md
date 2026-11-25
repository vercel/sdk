# FiveHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFortyEight } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFortyEight = {
  next: {
    access: "limited",
    limit: "<value>",
  },
  previous: {
    access: "unlimited",
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `next`                               | *models.UserEventPayload548Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload548Previous* | :heavy_check_mark:                   | N/A                                  |