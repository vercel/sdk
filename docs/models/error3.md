# Error3

## Example Usage

```typescript
import { Error3 } from "@vercel/sdk/models/getorderop.js";

let value: Error3 = {
  code: "price-mismatch",
  details: {
    expectedPrice: 6162.82,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `code`                                                                                     | [models.GetOrderErrorDomainsRegistrarCode](../models/getordererrordomainsregistrarcode.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `details`                                                                                  | [models.ErrorDetails](../models/errordetails.md)                                           | :heavy_check_mark:                                                                         | N/A                                                                                        |