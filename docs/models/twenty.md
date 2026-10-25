# Twenty

The payload of the event, if requested.

## Example Usage

```typescript
import { Twenty } from "@vercel/sdk/models/userevent.js";

let value: Twenty = {
  projectName: "<value>",
  resourceId: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `provider`                                                                   | [models.UserEventPayload20Provider](../models/usereventpayload20provider.md) | :heavy_minus_sign:                                                           | Present on new events only. Equivalent to "stripe" when absent.              |
| `providerAccount`                                                            | *string*                                                                     | :heavy_minus_sign:                                                           | Present on new events only. Equivalent to `stripeAccount` when absent.       |
| `stripeAccount`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | Present when `provider` is "stripe". Equivalent to `providerAccount`.        |
| `projectName`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `resourceId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |