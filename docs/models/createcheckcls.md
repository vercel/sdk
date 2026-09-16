# CreateCheckCLS

## Example Usage

```typescript
import { CreateCheckCLS } from "@vercel/sdk/models/createcheckop.js";

let value: CreateCheckCLS = {
  source: "web-vitals",
  value: null,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `previousValue`                                            | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `source`                                                   | [models.CreateCheckSource](../models/createchecksource.md) | :heavy_check_mark:                                         | N/A                                                        |
| `value`                                                    | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |