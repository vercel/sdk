# BlobT

## Example Usage

```typescript
import { BlobT } from "@vercel/sdk/models/userevent.js";

let value: BlobT = {
  overageReason: "storageRedisTotalBandwidthInBytes",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `updatedAt`                                                                                                                          | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `blockedFrom`                                                                                                                        | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `blockedUntil`                                                                                                                       | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `blockReason`                                                                                                                        | [models.UserEventPayload62NewOwnerFeatureBlocksBlobBlockReason](../models/usereventpayload62newownerfeatureblocksblobblockreason.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `overageReason`                                                                                                                      | [models.OverageReason](../models/overagereason.md)                                                                                   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |