# GetBulkPriceResults

## Example Usage

```typescript
import { GetBulkPriceResults } from "@vercel/sdk/models/getbulkpriceop.js";

let value: GetBulkPriceResults = {
  domain: "pink-pension.org",
  years: 7371.91,
  purchasePrice: "<value>",
  renewalPrice: 7309.88,
  transferPrice: 5131.25,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `domain`                           | *string*                           | :heavy_check_mark:                 | A valid domain name                |
| `years`                            | *number*                           | :heavy_check_mark:                 | N/A                                |
| `purchasePrice`                    | *models.GetBulkPricePurchasePrice* | :heavy_check_mark:                 | N/A                                |
| `renewalPrice`                     | *models.GetBulkPriceRenewalPrice*  | :heavy_check_mark:                 | N/A                                |
| `transferPrice`                    | *models.GetBulkPriceTransferPrice* | :heavy_check_mark:                 | N/A                                |