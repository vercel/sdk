# Domains1

## Example Usage

```typescript
import { Domains1 } from "@vercel/sdk/models/getorderop.js";

let value: Domains1 = {
  purchaseType: "purchase",
  autoRenew: true,
  years: 7534.4,
  domainName: "taut-cauliflower.net",
  status: "completed",
  price: 3599.64,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `purchaseType`                                                                                                 | [models.GetOrderDomainsDomainsRegistrarPurchaseType](../models/getorderdomainsdomainsregistrarpurchasetype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `autoRenew`                                                                                                    | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `years`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The number of years the domain is being purchased for.                                                         |
| `domainName`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `status`                                                                                                       | [models.DomainsStatus](../models/domainsstatus.md)                                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `price`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The price for the domain.                                                                                      |