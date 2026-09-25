# Eight

The payload of the event, if requested.

## Example Usage

```typescript
import { Eight } from "@vercel/sdk/models/userevent.js";

let value: Eight = {
  accountRequestId: "<id>",
  teamId: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `provider`                                                             | [models.Provider](../models/provider.md)                               | :heavy_minus_sign:                                                     | Present on new events only. Equivalent to "stripe" when absent.        |
| `providerAccount`                                                      | *string*                                                               | :heavy_minus_sign:                                                     | Present on new events only. Equivalent to `stripeAccount` when absent. |
| `stripeAccount`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | Present when `provider` is "stripe". Equivalent to `providerAccount`.  |
| `stripeOrganisation`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | Present when `provider` is "stripe".                                   |
| `accountRequestId`                                                     | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `teamId`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |