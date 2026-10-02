# SourceImages

## Example Usage

```typescript
import { SourceImages } from "@vercel/sdk/models/oldenvvar.js";

let value: SourceImages = {
  blockReason: "admin_override",
  updatedAt: 688.1,
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `blockedFrom`                                                                                                                                          | *number*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `blockedUntil`                                                                                                                                         | *number*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `blockReason`                                                                                                                                          | [models.UserEventPayload183NewOwnerFeatureBlocksSourceImagesBlockReason](../models/usereventpayload183newownerfeatureblockssourceimagesblockreason.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `updatedAt`                                                                                                                                            | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |