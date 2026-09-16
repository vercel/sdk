# GetBulkPriceResponseBody

Success

## Example Usage

```typescript
import { GetBulkPriceResponseBody } from "@vercel/sdk/models/getbulkpriceop.js";

let value: GetBulkPriceResponseBody = {
  results: [
    {
      domain: "wrathful-puppet.net",
      years: 4599.97,
      purchasePrice: "<value>",
      renewalPrice: 2055.43,
      transferPrice: 2831.69,
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `results`                                | [models.Results](../models/results.md)[] | :heavy_check_mark:                       | N/A                                      |