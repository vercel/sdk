# Twelve

The payload of the event, if requested.

## Example Usage

```typescript
import { Twelve } from "@vercel/sdk/models/userevent.js";

let value: Twelve = {
  teamId: "<id>",
  resourceId: "<id>",
  fromPlan: "hobby",
  toPlan: "hobby",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `provider`                                                                   | [models.UserEventPayload12Provider](../models/usereventpayload12provider.md) | :heavy_minus_sign:                                                           | Present on new events only. Equivalent to "stripe" when absent.              |
| `providerAccount`                                                            | *string*                                                                     | :heavy_minus_sign:                                                           | Present on new events only. Equivalent to `stripeAccount` when absent.       |
| `stripeAccount`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | Present when `provider` is "stripe". Equivalent to `providerAccount`.        |
| `stripeOrganisation`                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | Present when `provider` is "stripe".                                         |
| `teamId`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `resourceId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `fromPlan`                                                                   | [models.FromPlan](../models/fromplan.md)                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `toPlan`                                                                     | [models.ToPlan](../models/toplan.md)                                         | :heavy_check_mark:                                                           | N/A                                                                          |