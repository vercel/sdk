# Postgres2

## Example Usage

```typescript
import { Postgres2 } from "@vercel/sdk/models/ninetyeight.js";

let value: Postgres2 = {
  updatedAt: 7203.88,
  blockReason: "admin_override",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `updatedAt`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `blockedFrom`                                                                    | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `blockedUntil`                                                                   | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `blockReason`                                                                    | [models.UserEventPostgresBlockReason](../models/usereventpostgresblockreason.md) | :heavy_check_mark:                                                               | N/A                                                                              |