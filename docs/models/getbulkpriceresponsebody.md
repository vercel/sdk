# GetBulkPriceResponseBody

Success

## Example Usage

```typescript
import { GetBulkPriceResponseBody } from "@vercel/sdk/models/getbulkpriceop.js";

let value: GetBulkPriceResponseBody = {
  results: [
    {
      domain: "merry-awareness.name",
      years: 8943.31,
      purchasePrice: "<value>",
      renewalPrice: 6220.29,
      transferPrice: "<value>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `results`                                                        | [models.GetBulkPriceResults](../models/getbulkpriceresults.md)[] | :heavy_check_mark:                                               | N/A                                                              |