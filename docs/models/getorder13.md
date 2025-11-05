# GetOrder13

## Example Usage

```typescript
import { GetOrder13 } from "@vercel/sdk/models/getorderop.js";

let value: GetOrder13 = {
  code: "price-mismatch",
  details: {
    expectedPrice: 6230.96,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `code`                                                                             | [models.GetOrder1DomainsRegistrarCode](../models/getorder1domainsregistrarcode.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `details`                                                                          | [models.OneDetails](../models/onedetails.md)                                       | :heavy_check_mark:                                                                 | N/A                                                                                |