# ListBillingChargesResponseBody

Extension of the base schema for Focus charges. Includes pricing information for all customers.

## Example Usage

```typescript
import { ListBillingChargesResponseBody } from "@vercel/sdk/models/listbillingchargesop.js";

let value: ListBillingChargesResponseBody = {
  billedCost: 5918.14,
  billingCurrency: "USD",
  chargeCategory: "Adjustment",
  chargePeriodStart: "<value>",
  chargePeriodEnd: "<value>",
  consumedQuantity: 9008.03,
  consumedUnit: "<value>",
  effectiveCost: 8630.21,
  serviceName: "<value>",
  serviceProviderName: "<value>",
  tags: {
    "key": "<value>",
    "key1": "<value>",
  },
  pricingCategory: "Other",
  pricingCurrency: "USD",
  pricingQuantity: 7629.01,
  pricingUnit: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `billedCost`                                                                                   | *number*                                                                                       | :heavy_check_mark:                                                                             | Charge amount serving as the basis for invoicing                                               |
| `billingCurrency`                                                                              | [models.BillingCurrency](../models/billingcurrency.md)                                         | :heavy_check_mark:                                                                             | Currency used for billing (ISO 4217)                                                           |
| `chargeCategory`                                                                               | [models.ChargeCategory](../models/chargecategory.md)                                           | :heavy_check_mark:                                                                             | Classification of the charge                                                                   |
| `chargePeriodStart`                                                                            | *string*                                                                                       | :heavy_check_mark:                                                                             | Inclusive start of the charge period (ISO 8601 UTC)                                            |
| `chargePeriodEnd`                                                                              | *string*                                                                                       | :heavy_check_mark:                                                                             | Exclusive end of the charge period (ISO 8601 UTC) - Required in v1.3                           |
| `consumedQuantity`                                                                             | *number*                                                                                       | :heavy_check_mark:                                                                             | Volume of resource consumed                                                                    |
| `consumedUnit`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | Unit of measurement for consumed quantity                                                      |
| `effectiveCost`                                                                                | *number*                                                                                       | :heavy_check_mark:                                                                             | Amortized cost representation including discounts, pre-commitment credit purchase amount, etc. |
| `regionId`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | Provider-assigned region identifier                                                            |
| `regionName`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | Display name for the region                                                                    |
| `serviceName`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | Display name for the service/product                                                           |
| `serviceCategory`                                                                              | [models.ServiceCategory](../models/servicecategory.md)                                         | :heavy_minus_sign:                                                                             | High-level category of the service                                                             |
| `serviceProviderName`                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | Entity making the resource/service available for purchase (v1.3)                               |
| `tags`                                                                                         | Record<string, *string*>                                                                       | :heavy_check_mark:                                                                             | Custom key-value metadata (ProjectId, ProjectName)                                             |
| `pricingCategory`                                                                              | [models.PricingCategory](../models/pricingcategory.md)                                         | :heavy_check_mark:                                                                             | Pricing model used for the charge.                                                             |
| `pricingCurrency`                                                                              | [models.PricingCurrency](../models/pricingcurrency.md)                                         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pricingQuantity`                                                                              | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pricingUnit`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |