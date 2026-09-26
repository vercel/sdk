# Redis1

## Example Usage

```typescript
import { Redis1 } from "@vercel/sdk/models/payloadspeedinsightsfree.js";

let value: Redis1 = {
  blockReason: "limits_exceeded",
  updatedAt: 8275.72,
  overageReason: "artifacts",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `blockedFrom`                                                | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `blockedUntil`                                               | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `blockReason`                                                | *"limits_exceeded"*                                          | :heavy_check_mark:                                           | N/A                                                          |
| `updatedAt`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `overageReason`                                              | [models.RedisOverageReason](../models/redisoveragereason.md) | :heavy_check_mark:                                           | N/A                                                          |