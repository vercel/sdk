# GetBulkPriceRequestBody

## Example Usage

```typescript
import { GetBulkPriceRequestBody } from "@vercel/sdk/models/getbulkpriceop.js";

let value: GetBulkPriceRequestBody = {
  domains: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `domains`                                                                                                        | *string*[]                                                                                                       | :heavy_check_mark:                                                                                               | an array of at most 50 item(s)                                                                                   |
| `years`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The number of years to get the price for. If not provided, the minimum number of years for the TLD will be used. |