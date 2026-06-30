# Eight

The payload of the event, if requested.

## Example Usage

```typescript
import { Eight } from "@vercel/sdk/models/payload1.js";

let value: Eight = {
  reason: "<value>",
  blockCode: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `provider`                                                                 | [models.UserEventPayload8Provider](../models/usereventpayload8provider.md) | :heavy_minus_sign:                                                         | Present on new events only. Equivalent to "stripe" when absent.            |
| `providerAccount`                                                          | *string*                                                                   | :heavy_minus_sign:                                                         | Present on new events only. Equivalent to `stripeAccount` when absent.     |
| `stripeAccount`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | Present when `provider` is "stripe". Equivalent to `providerAccount`.      |
| `stripeOrganisation`                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | Present when `provider` is "stripe".                                       |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `blockCode`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |