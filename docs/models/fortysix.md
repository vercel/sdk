# FortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FortySix } from "@vercel/sdk/models/usereventpayload34afterresourcestype.js";

let value: FortySix = {
  action: "resume_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `subscriptionId`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload46Action](../models/usereventpayload46action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [models.PayloadData](../models/payloaddata.md)                           | :heavy_check_mark:                                                       | N/A                                                                      |