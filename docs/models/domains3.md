# Domains3

## Example Usage

```typescript
import { Domains3 } from "@vercel/sdk/models/getorderop.js";

let value: Domains3 = {
  purchaseType: "transfer",
  autoRenew: false,
  years: 8949.87,
  domainName: "hurtful-essence.name",
  status: "failed",
  price: 6459.45,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `purchaseType`                                                                                     | *"transfer"*                                                                                       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `autoRenew`                                                                                        | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `years`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | The number of years the domain is being transferred for.                                           |
| `domainName`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | A valid domain name                                                                                |
| `status`                                                                                           | [models.GetOrderDomainsDomainsRegistrarStatus](../models/getorderdomainsdomainsregistrarstatus.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `price`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `error`                                                                                            | *models.GetOrderDomainsDomainsRegistrarError*                                                      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |