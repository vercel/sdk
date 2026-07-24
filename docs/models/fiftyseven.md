# FiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftySeven } from "@vercel/sdk/models/twentythree.js";

let value: FiftySeven = {
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
| `action`                                                                 | [models.UserEventPayload57Action](../models/usereventpayload57action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [models.UserEventPayloadData](../models/usereventpayloaddata.md)         | :heavy_check_mark:                                                       | N/A                                                                      |