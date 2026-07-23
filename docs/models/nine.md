# Nine

The payload of the event, if requested.

## Example Usage

```typescript
import { Nine } from "@vercel/sdk/models/userevent.js";

let value: Nine = {
  resourceId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `provider`                                                                 | [models.UserEventPayload9Provider](../models/usereventpayload9provider.md) | :heavy_minus_sign:                                                         | Present on new events only. Equivalent to "stripe" when absent.            |
| `providerAccount`                                                          | *string*                                                                   | :heavy_minus_sign:                                                         | Present on new events only. Equivalent to `stripeAccount` when absent.     |
| `stripeAccount`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | Present when `provider` is "stripe". Equivalent to `providerAccount`.      |
| `resourceId`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectName`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |