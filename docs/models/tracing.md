# Tracing

## Example Usage

```typescript
import { Tracing } from "@vercel/sdk/models/previousrule.js";

let value: Tracing = {
  updatedAt: 3761.97,
  blockReason: "hard_blocked",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `updatedAt`                                                                                                                                  | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `blockedFrom`                                                                                                                                | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `blockedUntil`                                                                                                                               | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `blockReason`                                                                                                                                | [models.UserEventPayload165NewOwnerFeatureBlocksTracingBlockReason](../models/usereventpayload165newownerfeatureblockstracingblockreason.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |