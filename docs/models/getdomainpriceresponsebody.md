# GetDomainPriceResponseBody

Success

## Example Usage

```typescript
import { GetDomainPriceResponseBody } from "@vercel/sdk/models/getdomainpriceop.js";

let value: GetDomainPriceResponseBody = {
  years: 6336.28,
  purchasePrice: 546.91,
  renewalPrice: 2910.01,
  transferPrice: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `years`                              | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `purchasePrice`                      | *models.GetDomainPricePurchasePrice* | :heavy_check_mark:                   | N/A                                  |
| `renewalPrice`                       | *models.GetDomainPriceRenewalPrice*  | :heavy_check_mark:                   | N/A                                  |
| `transferPrice`                      | *models.GetDomainPriceTransferPrice* | :heavy_check_mark:                   | N/A                                  |