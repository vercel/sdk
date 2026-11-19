# NinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFive } from "@vercel/sdk/models/payloadresources.js";

let value: NinetyFive = {
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
| `action`                                                                 | [models.UserEventPayload95Action](../models/usereventpayload95action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [models.PayloadData](../models/payloaddata.md)                           | :heavy_check_mark:                                                       | N/A                                                                      |