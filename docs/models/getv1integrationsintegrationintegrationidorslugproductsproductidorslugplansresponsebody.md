# GetV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlansResponseBody

## Example Usage

```typescript
import {
  GetV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlansResponseBody,
} from "@vercel/sdk/models/getv1integrationsintegrationintegrationidorslugproductsproductidorslugplansop.js";

let value:
  GetV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlansResponseBody =
    {
      plans: [
        {
          type: "subscription",
          id: "<id>",
          name: "<value>",
          scope: "installation",
          description: "delightfully buzzing opposite carefully",
          paymentMethodRequired: true,
        },
      ],
    };
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `plans`                              | [models.Plans](../models/plans.md)[] | :heavy_check_mark:                   | N/A                                  |