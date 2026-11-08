# TwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyFive } from "@vercel/sdk/models/userevent.js";

let value: TwentyFive = {
  fromPlan: "hobby",
  resourceId: "<id>",
  teamId: "<id>",
  toPlan: "pro",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `provider`                                                                   | [models.UserEventPayload25Provider](../models/usereventpayload25provider.md) | :heavy_minus_sign:                                                           | Present on new events only. Equivalent to "stripe" when absent.              |
| `providerAccount`                                                            | *string*                                                                     | :heavy_minus_sign:                                                           | Present on new events only. Equivalent to `stripeAccount` when absent.       |
| `stripeAccount`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | Present when `provider` is "stripe". Equivalent to `providerAccount`.        |
| `stripeOrganisation`                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | Present when `provider` is "stripe".                                         |
| `fromPlan`                                                                   | [models.FromPlan](../models/fromplan.md)                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `resourceId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `teamId`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `toPlan`                                                                     | [models.ToPlan](../models/toplan.md)                                         | :heavy_check_mark:                                                           | N/A                                                                          |