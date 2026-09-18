# Postgres2

## Example Usage

```typescript
import { Postgres2 } from "@vercel/sdk/models/usereventpayload172newownerfeatureblocksvcrblockreason.js";

let value: Postgres2 = {
  blockReason: "hard_blocked",
  updatedAt: 367.35,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `blockedFrom`                                                                    | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `blockedUntil`                                                                   | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `blockReason`                                                                    | [models.UserEventPostgresBlockReason](../models/usereventpostgresblockreason.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `updatedAt`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |