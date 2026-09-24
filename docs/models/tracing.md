# Tracing

## Example Usage

```typescript
import { Tracing } from "@vercel/sdk/models/lasteditedbyprincipal2.js";

let value: Tracing = {
  blockReason: "hard_blocked",
  updatedAt: 6097.09,
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `blockedFrom`                                                                                                                                | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `blockedUntil`                                                                                                                               | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `blockReason`                                                                                                                                | [models.UserEventPayload176NewOwnerFeatureBlocksTracingBlockReason](../models/usereventpayload176newownerfeatureblockstracingblockreason.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `updatedAt`                                                                                                                                  | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |