# GetCheckFCP

## Example Usage

```typescript
import { GetCheckFCP } from "@vercel/sdk/models/getcheckop.js";

let value: GetCheckFCP = {
  source: "web-vitals",
  value: 2124.62,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `previousValue`                                                  | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `source`                                                         | [models.GetCheckChecksSource](../models/getcheckcheckssource.md) | :heavy_check_mark:                                               | N/A                                                              |
| `value`                                                          | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |