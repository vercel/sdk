# SandboxStorage

## Example Usage

```typescript
import { SandboxStorage } from "@vercel/sdk/models/oldprojects.js";

let value: SandboxStorage = {
  blockReason: "hard_blocked",
  updatedAt: 3284.53,
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blockedFrom`                                                                                                                                              | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `blockedUntil`                                                                                                                                             | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `blockReason`                                                                                                                                              | [models.UserEventPayload182NewOwnerFeatureBlocksSandboxStorageBlockReason](../models/usereventpayload182newownerfeatureblockssandboxstorageblockreason.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `updatedAt`                                                                                                                                                | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |