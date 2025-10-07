# Domains3

## Example Usage

```typescript
import { Domains3 } from "@vercel/sdk/models/getorderop.js";

let value: Domains3 = {
  purchaseType: "transfer",
  autoRenew: false,
  domainName: "unlawful-gloom.biz",
  status: "failed",
  price: 4449.43,
  years: 6459.45,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `purchaseType`                                                                                     | [models.GetOrderDomainsPurchaseType](../models/getorderdomainspurchasetype.md)                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `autoRenew`                                                                                        | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `domainName`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [models.GetOrderDomainsDomainsRegistrarStatus](../models/getorderdomainsdomainsregistrarstatus.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `price`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | Represents a monetary amount in USD dollars                                                        |
| `years`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |