# Blob1

## Example Usage

```typescript
import { Blob1 } from "@vercel/sdk/models/edgeconfig.js";

let value: Blob1 = {
  updatedAt: 5128.29,
  blockReason: "limits_exceeded",
  overageReason: "imageOptimizationCacheRead",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `updatedAt`                                        | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `blockedFrom`                                      | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `blockedUntil`                                     | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `blockReason`                                      | *"limits_exceeded"*                                | :heavy_check_mark:                                 | N/A                                                |
| `overageReason`                                    | [models.OverageReason](../models/overagereason.md) | :heavy_check_mark:                                 | N/A                                                |