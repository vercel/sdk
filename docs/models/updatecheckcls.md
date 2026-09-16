# UpdateCheckCLS

## Example Usage

```typescript
import { UpdateCheckCLS } from "@vercel/sdk/models/updatecheckop.js";

let value: UpdateCheckCLS = {
  source: "web-vitals",
  value: 5082.17,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `previousValue`                                                                        | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `source`                                                                               | [models.UpdateCheckChecksResponseSource](../models/updatecheckchecksresponsesource.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `value`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |