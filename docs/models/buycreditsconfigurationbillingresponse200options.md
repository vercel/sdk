# BuyCreditsConfigurationBillingResponse200Options

## Example Usage

```typescript
import { BuyCreditsConfigurationBillingResponse200Options } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsConfigurationBillingResponse200Options = {
  orbCustomerId: "<id>",
  orbExternalCustomerId: "<id>",
  orbExternalPlanId: "<id>",
  orbPendingSubscriptionChangeId: "<id>",
  orbPlanId: "<id>",
  orbSubscriptionId: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `orbCustomerId`                                                        | *string*                                                               | :heavy_check_mark:                                                     | The ID of the Orb customer to create                                   |
| `orbExternalCustomerId`                                                | *string*                                                               | :heavy_check_mark:                                                     | The external ID of the Orb customer to create                          |
| `orbExternalPlanId`                                                    | *string*                                                               | :heavy_check_mark:                                                     | The external ID of the Orb plan to create                              |
| `orbPendingSubscriptionChangeId`                                       | *string*                                                               | :heavy_check_mark:                                                     | The ID of the pending subscription change                              |
| `orbPlanId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | The ID of the Orb plan to create                                       |
| `orbSubscriptionId`                                                    | *string*                                                               | :heavy_check_mark:                                                     | The ID of the Orb subscription to create                               |
| `lineItems`                                                            | [models.ConfigurationLineItems](../models/configurationlineitems.md)[] | :heavy_minus_sign:                                                     | The line items that make up the Purchase Intent.                       |