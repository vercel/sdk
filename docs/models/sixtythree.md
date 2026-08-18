# SixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyThree } from "@vercel/sdk/models/usereventpayloadrefreshperiod.js";

let value: SixtyThree = {
  action: "cancel_plan",
  data: {
    planSlug: "v0_teams",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `subscriptionId`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload63Action](../models/usereventpayload63action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [models.UserEventPayloadData](../models/usereventpayloaddata.md)         | :heavy_check_mark:                                                       | N/A                                                                      |