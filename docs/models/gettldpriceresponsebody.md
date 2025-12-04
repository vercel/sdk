# GetTldPriceResponseBody

Success

## Example Usage

```typescript
import { GetTldPriceResponseBody } from "@vercel/sdk/models/gettldpriceop.js";

let value: GetTldPriceResponseBody = {
  years: 1341.28,
  purchasePrice: "<value>",
  renewalPrice: "<value>",
  transferPrice: 5324.89,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `years`                                        | *number*                                       | :heavy_check_mark:                             | The number of years the returned price is for. |
| `purchasePrice`                                | *models.PurchasePrice*                         | :heavy_check_mark:                             | N/A                                            |
| `renewalPrice`                                 | *models.RenewalPrice*                          | :heavy_check_mark:                             | N/A                                            |
| `transferPrice`                                | *models.TransferPrice*                         | :heavy_check_mark:                             | N/A                                            |