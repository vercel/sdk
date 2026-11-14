# TwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyFour } from "@vercel/sdk/models/usereventvia4type.js";

let value: TwentyFour = {
  blockCode: "<value>",
  reason: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `provider`                                                                   | [models.UserEventPayload24Provider](../models/usereventpayload24provider.md) | :heavy_minus_sign:                                                           | Present on new events only. Equivalent to "stripe" when absent.              |
| `providerAccount`                                                            | *string*                                                                     | :heavy_minus_sign:                                                           | Present on new events only. Equivalent to `stripeAccount` when absent.       |
| `stripeAccount`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | Present when `provider` is "stripe". Equivalent to `providerAccount`.        |
| `stripeOrganisation`                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | Present when `provider` is "stripe".                                         |
| `blockCode`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `reason`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |