# UploadProjectAvatarAbuse

## Example Usage

```typescript
import { UploadProjectAvatarAbuse } from "@vercel/sdk/models/uploadprojectavatartracing.js";

let value: UploadProjectAvatarAbuse = {
  history: [
    {
      scanner: "<value>",
      reason: "<value>",
      by: "<value>",
      byId: "<id>",
      at: 4347.52,
    },
  ],
  updatedAt: 6791.78,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `scanner`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `history`                                                                                              | [models.UploadProjectAvatarHistory](../models/uploadprojectavatarhistory.md)[]                         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updatedAt`                                                                                            | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `block`                                                                                                | [models.UploadProjectAvatarBlock](../models/uploadprojectavatarblock.md)                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `blockHistory`                                                                                         | *models.UploadProjectAvatarBlockHistory*[]                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `interstitial`                                                                                         | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `interstitialHistory`                                                                                  | [models.UploadProjectAvatarInterstitialHistory](../models/uploadprojectavatarinterstitialhistory.md)[] | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |