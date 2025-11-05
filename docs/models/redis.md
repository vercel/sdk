# Redis

## Example Usage

```typescript
import { Redis } from "@vercel/sdk/models/userevent.js";

let value: Redis = {
  updatedAt: 7235.89,
  blockReason: "admin_override",
  overageReason: "functionInvocation",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `updatedAt`                                                                                                                            | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `blockedFrom`                                                                                                                          | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `blockedUntil`                                                                                                                         | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `blockReason`                                                                                                                          | [models.UserEventPayload66NewOwnerFeatureBlocksRedisBlockReason](../models/usereventpayload66newownerfeatureblocksredisblockreason.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `overageReason`                                                                                                                        | [models.UserEventPayloadOverageReason](../models/usereventpayloadoveragereason.md)                                                     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |