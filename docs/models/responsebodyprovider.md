# ResponseBodyProvider

## Example Usage

```typescript
import { ResponseBodyProvider } from "@vercel/sdk/models/buycreditsop.js";

let value: ResponseBodyProvider = {
  resourceId: "<id>",
  type: "stripe_invoice_deferred",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `resourceId`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Provider resource id                                                                                                     |
| `type`                                                                                                                   | [models.BuyCreditsResponseBodyType](../models/buycreditsresponsebodytype.md)                                             | :heavy_check_mark:                                                                                                       | The type of the purchase provider                                                                                        |
| `currencyConversionRate`                                                                                                 | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The currency conversion rate used by the provider                                                                        |
| `stripeSharedPaymentTokenUsed`                                                                                           | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | Whether a Stripe Shared Payment Token was used for this purchase. Only applicable when type is stripe_invoice_immediate. |