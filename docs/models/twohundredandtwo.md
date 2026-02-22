# TwoHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwo } from "@vercel/sdk/models/onehundredandsixtyfour.js";

let value: TwoHundredAndTwo = {
  action: "cancel_plan",
  data: {
    planSlug: "v0_teams",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `subscriptionId`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `action`                                                                   | [models.UserEventPayload202Action](../models/usereventpayload202action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | [models.UserEventPayloadData](../models/usereventpayloaddata.md)           | :heavy_check_mark:                                                         | N/A                                                                        |