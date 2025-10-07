# GetTldPriceResponseBody

Success

## Example Usage

```typescript
import { GetTldPriceResponseBody } from "@vercel/sdk/models/gettldpriceop.js";

let value: GetTldPriceResponseBody = {
  years: 1341.28,
  purchasePrice: 6555.58,
  renewalPrice: 8116.17,
  transferPrice: 1981.19,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `years`                                     | *number*                                    | :heavy_check_mark:                          | N/A                                         |
| `purchasePrice`                             | *number*                                    | :heavy_check_mark:                          | Represents a monetary amount in USD dollars |
| `renewalPrice`                              | *number*                                    | :heavy_check_mark:                          | Represents a monetary amount in USD dollars |
| `transferPrice`                             | *number*                                    | :heavy_check_mark:                          | Represents a monetary amount in USD dollars |