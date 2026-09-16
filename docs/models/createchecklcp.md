# CreateCheckLCP

## Example Usage

```typescript
import { CreateCheckLCP } from "@vercel/sdk/models/createcheckop.js";

let value: CreateCheckLCP = {
  source: "web-vitals",
  value: null,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `previousValue`                                                                        | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `source`                                                                               | [models.CreateCheckChecksResponseSource](../models/createcheckchecksresponsesource.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `value`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |