# TwoHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThree } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndThree = {
  action: "resume_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `subscriptionId`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `action`                                                                   | [models.UserEventPayload203Action](../models/usereventpayload203action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | [models.PayloadData](../models/payloaddata.md)                             | :heavy_check_mark:                                                         | N/A                                                                        |