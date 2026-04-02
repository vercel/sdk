# Postgres1

## Example Usage

```typescript
import { Postgres1 } from "@vercel/sdk/models/ninetyeight.js";

let value: Postgres1 = {
  updatedAt: 1277.44,
  blockReason: "limits_exceeded",
  overageReason: "edgeConfigWrite",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `updatedAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `blockedFrom`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `blockedUntil`                                                     | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `blockReason`                                                      | *"limits_exceeded"*                                                | :heavy_check_mark:                                                 | N/A                                                                |
| `overageReason`                                                    | [models.PostgresOverageReason](../models/postgresoveragereason.md) | :heavy_check_mark:                                                 | N/A                                                                |