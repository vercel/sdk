# SixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtySix } from "@vercel/sdk/models/twentynine.js";

let value: SixtySix = {
  action: "cancel_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `subscriptionId`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload66Action](../models/usereventpayload66action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [models.UserEventPayloadData](../models/usereventpayloaddata.md)         | :heavy_check_mark:                                                       | N/A                                                                      |