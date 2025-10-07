# Domains1

## Example Usage

```typescript
import { Domains1 } from "@vercel/sdk/models/getorderop.js";

let value: Domains1 = {
  purchaseType: "purchase",
  autoRenew: true,
  domainName: "slight-spork.com",
  status: "refunded",
  price: 2038.65,
  years: 3599.64,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `purchaseType`                                                                                                 | [models.GetOrderDomainsDomainsRegistrarPurchaseType](../models/getorderdomainsdomainsregistrarpurchasetype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `autoRenew`                                                                                                    | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `domainName`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `status`                                                                                                       | [models.DomainsStatus](../models/domainsstatus.md)                                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `price`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Represents a monetary amount in USD dollars                                                                    |
| `years`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |