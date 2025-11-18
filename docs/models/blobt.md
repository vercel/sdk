# BlobT

## Example Usage

```typescript
import { BlobT } from "@vercel/sdk/models/userevent.js";

let value: BlobT = {
  updatedAt: 3811.93,
  blockReason: "limits_exceeded",
  overageReason: "imageOptimizationCacheRead",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `updatedAt`                                                                                                                          | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `blockedFrom`                                                                                                                        | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `blockedUntil`                                                                                                                       | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `blockReason`                                                                                                                        | [models.UserEventPayload67NewOwnerFeatureBlocksBlobBlockReason](../models/usereventpayload67newownerfeatureblocksblobblockreason.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `overageReason`                                                                                                                      | [models.OverageReason](../models/overagereason.md)                                                                                   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |