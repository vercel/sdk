# Postgres

## Example Usage

```typescript
import { Postgres } from "@vercel/sdk/models/userevent.js";

let value: Postgres = {
  updatedAt: 9995.65,
  blockReason: "admin_override",
  overageReason: "fluidDuration",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `updatedAt`                                                                                                                                  | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `blockedFrom`                                                                                                                                | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `blockedUntil`                                                                                                                               | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `blockReason`                                                                                                                                | [models.UserEventPayload67NewOwnerFeatureBlocksPostgresBlockReason](../models/usereventpayload67newownerfeatureblockspostgresblockreason.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `overageReason`                                                                                                                              | [models.PayloadOverageReason](../models/payloadoveragereason.md)                                                                             | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |