# Blob1

## Example Usage

```typescript
import { Blob1 } from "@vercel/sdk/models/sourceimages.js";

let value: Blob1 = {
  blockReason: "limits_exceeded",
  updatedAt: 5128.29,
  overageReason: "functionInvocation",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `blockedFrom`                                      | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `blockedUntil`                                     | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `blockReason`                                      | *"limits_exceeded"*                                | :heavy_check_mark:                                 | N/A                                                |
| `updatedAt`                                        | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `overageReason`                                    | [models.OverageReason](../models/overagereason.md) | :heavy_check_mark:                                 | N/A                                                |