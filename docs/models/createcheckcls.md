# CreateCheckCLS

## Example Usage

```typescript
import { CreateCheckCLS } from "@vercel/sdk/models/createcheckop.js";

let value: CreateCheckCLS = {
  value: 961.04,
  source: "web-vitals",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `value`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `previousValue`                                                                        | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `source`                                                                               | [models.CreateCheckChecksResponseSource](../models/createcheckchecksresponsesource.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |