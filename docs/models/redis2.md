# Redis2

## Example Usage

```typescript
import { Redis2 } from "@vercel/sdk/models/sourceimages.js";

let value: Redis2 = {
  blockReason: "admin_override",
  updatedAt: 8943.03,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `blockedFrom`                                                              | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `blockedUntil`                                                             | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `blockReason`                                                              | [models.UserEventRedisBlockReason](../models/usereventredisblockreason.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `updatedAt`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |