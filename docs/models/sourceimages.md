# SourceImages

## Example Usage

```typescript
import { SourceImages } from "@vercel/sdk/models/sourceimages.js";

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
| `blockReason`                                                                                                                                          | [models.UserEventPayload174NewOwnerFeatureBlocksSourceImagesBlockReason](../models/usereventpayload174newownerfeatureblockssourceimagesblockreason.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `updatedAt`                                                                                                                                            | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |