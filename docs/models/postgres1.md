# Postgres1

## Example Usage

```typescript
import { Postgres1 } from "@vercel/sdk/models/sourceimages.js";

let value: Postgres1 = {
  blockReason: "limits_exceeded",
  updatedAt: 1277.44,
  overageReason: "edgeConfigRead",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `blockedFrom`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `blockedUntil`                                                     | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `blockReason`                                                      | *"limits_exceeded"*                                                | :heavy_check_mark:                                                 | N/A                                                                |
| `updatedAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `overageReason`                                                    | [models.PostgresOverageReason](../models/postgresoveragereason.md) | :heavy_check_mark:                                                 | N/A                                                                |