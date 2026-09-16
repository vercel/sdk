# Results

## Example Usage

```typescript
import { Results } from "@vercel/sdk/models/getbulkpriceop.js";

let value: Results = {
  domain: "wrathful-puppet.net",
  years: 4599.97,
  purchasePrice: "<value>",
  renewalPrice: 2055.43,
  transferPrice: 2831.69,
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