# EightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFive } from "@vercel/sdk/models/data2.js";

let value: EightyFive = {
  action: "resume_plan",
  data: {
    planSlug: "v0_teams",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `subscriptionId`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload85Action](../models/usereventpayload85action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [models.PayloadData](../models/payloaddata.md)                           | :heavy_check_mark:                                                       | N/A                                                                      |