# PurchaseIntent

The created purchase intent

## Example Usage

```typescript
import { PurchaseIntent } from "@vercel/sdk/models/buycreditsop.js";

let value: PurchaseIntent = {
  id: "<id>",
  configuration: {
    options: {
      amount: "491.18",
      currency: "vercel_agent_credits",
    },
    output: "<value>",
    type: "credit_topup",
  },
  createdAt: "1727449532342",
  currency: "miu",
  ownerId: "<id>",
  provider: {
    resourceId: "<id>",
    type: "apple_in_app_purchase",
  },
  status: "failed",
  subtotal: "<value>",
  tax: "<value>",
  total: "<value>",
  updatedAt: "1735623594764",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The unique ID of a Purchase Intent. Uses the format `pur_*`                                    |
| `configuration`                                                                                | *models.BuyCreditsResponseBodyConfiguration*                                                   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The datetime when the Purchase Intent was created.                                             |
| `currency`                                                                                     | [models.Currency](../models/currency.md)                                                       | :heavy_check_mark:                                                                             | The currency for the purchase intent                                                           |
| `ownerId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the owner of the Purchase Intent.                                                    |
| `provider`                                                                                     | [models.ResponseBodyProvider](../models/responsebodyprovider.md)                               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [models.BuyCreditsResponseBodyBillingStatus](../models/buycreditsresponsebodybillingstatus.md) | :heavy_check_mark:                                                                             | The status of the Purchase Intent.                                                             |
| `subtotal`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | The subtotal of the Purchase Intent.                                                           |
| `tax`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | The tax due on the Purchase Intent.                                                            |
| `total`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | The total balance due on the Purchase Intent.                                                  |
| `updatedAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The datetime when the Purchase Intent was last updated.                                        |
| `dispute`                                                                                      | [models.Dispute](../models/dispute.md)                                                         | :heavy_minus_sign:                                                                             | The dispute details, if any.                                                                   |
| `lineItems`                                                                                    | [models.LineItems](../models/lineitems.md)[]                                                   | :heavy_minus_sign:                                                                             | The line items that make up the Purchase Intent.                                               |
| `metadata`                                                                                     | Record<string, *string*>                                                                       | :heavy_minus_sign:                                                                             | Optional metadata associated with the purchase intent                                          |
| `refund`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | The amount of the purchase intent that has been refunded                                       |
| `returnUrl`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | The URL to redirect to after the purchase is complete                                          |