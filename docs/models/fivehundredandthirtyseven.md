# FiveHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtySeven } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtySeven = {
  next: {
    access: "default",
  },
  previous: {
    access: "default",
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `next`                               | *models.UserEventPayload537Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload537Previous* | :heavy_check_mark:                   | N/A                                  |