# FiveHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndNineteen } from "@vercel/sdk/models/fourhundredandeightyseven.js";

let value: FiveHundredAndNineteen = {
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
| `next`                               | *models.UserEventPayload519Next*     | :heavy_check_mark:                   | N/A                                  |
| `previous`                           | *models.UserEventPayload519Previous* | :heavy_check_mark:                   | N/A                                  |