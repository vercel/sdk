# Redis2

## Example Usage

```typescript
import { Redis2 } from "@vercel/sdk/models/ninetynine.js";

let value: Redis2 = {
  updatedAt: 1522.96,
  blockReason: "hard_blocked",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `updatedAt`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `blockedFrom`                                                              | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `blockedUntil`                                                             | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `blockReason`                                                              | [models.UserEventRedisBlockReason](../models/usereventredisblockreason.md) | :heavy_check_mark:                                                         | N/A                                                                        |