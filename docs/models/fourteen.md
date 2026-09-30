# Fourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Fourteen } from "@vercel/sdk/models/via3.js";

let value: Fourteen = {
  projectName: "<value>",
  resourceId: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `provider`                                                                   | [models.UserEventPayload14Provider](../models/usereventpayload14provider.md) | :heavy_minus_sign:                                                           | Present on new events only. Equivalent to "stripe" when absent.              |
| `providerAccount`                                                            | *string*                                                                     | :heavy_minus_sign:                                                           | Present on new events only. Equivalent to `stripeAccount` when absent.       |
| `stripeAccount`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | Present when `provider` is "stripe". Equivalent to `providerAccount`.        |
| `projectName`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `resourceId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |