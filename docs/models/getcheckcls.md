# GetCheckCLS

## Example Usage

```typescript
import { GetCheckCLS } from "@vercel/sdk/models/getcheckop.js";

let value: GetCheckCLS = {
  source: "web-vitals",
  value: 9260.43,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `previousValue`                                      | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `source`                                             | [models.GetCheckSource](../models/getchecksource.md) | :heavy_check_mark:                                   | N/A                                                  |
| `value`                                              | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |