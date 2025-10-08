# Domains2

## Example Usage

```typescript
import { Domains2 } from "@vercel/sdk/models/getorderop.js";

let value: Domains2 = {
  purchaseType: "renewal",
  years: 7846.54,
  domainName: "hungry-mountain.net",
  status: "pending",
  price: 8001.66,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `purchaseType`                                                     | [models.DomainsPurchaseType](../models/domainspurchasetype.md)     | :heavy_check_mark:                                                 | N/A                                                                |
| `years`                                                            | *number*                                                           | :heavy_check_mark:                                                 | The number of years the domain is being renewed for.               |
| `domainName`                                                       | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `status`                                                           | [models.GetOrderDomainsStatus](../models/getorderdomainsstatus.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `price`                                                            | *number*                                                           | :heavy_check_mark:                                                 | The price for the domain.                                          |