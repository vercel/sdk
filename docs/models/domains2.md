# Domains2

## Example Usage

```typescript
import { Domains2 } from "@vercel/sdk/models/getorderop.js";

let value: Domains2 = {
  purchaseType: "renewal",
  domainName: "spiffy-glider.name",
  status: "refunded",
  price: 1365.02,
  years: 8001.66,
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `purchaseType`                                                                                                                                                | [models.DomainsPurchaseType](../models/domainspurchasetype.md)                                                                                                | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           |
| `domainName`                                                                                                                                                  | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           |
| `status`                                                                                                                                                      | [models.GetOrderDomainsStatus](../models/getorderdomainsstatus.md)                                                                                            | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           |
| `price`                                                                                                                                                       | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The base TLD price for purchasing a domain for the given number of years. If null, the TLD does not support purchasing domains for the given number of years. |
| `years`                                                                                                                                                       | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           |