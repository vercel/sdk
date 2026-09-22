# UploadProjectAvatarAbuse

## Example Usage

```typescript
import { UploadProjectAvatarAbuse } from "@vercel/sdk/models/uploadprojectavatarhas2.js";

let value: UploadProjectAvatarAbuse = {
  history: [
    {
      at: 4347.52,
      by: "<value>",
      byId: "<id>",
      reason: "<value>",
      scanner: "<value>",
    },
  ],
  updatedAt: 6791.78,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `block`                                                                                                | [models.UploadProjectAvatarBlock](../models/uploadprojectavatarblock.md)                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `blockHistory`                                                                                         | *models.UploadProjectAvatarBlockHistory*[]                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `history`                                                                                              | [models.UploadProjectAvatarHistory](../models/uploadprojectavatarhistory.md)[]                         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `interstitial`                                                                                         | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `interstitialHistory`                                                                                  | [models.UploadProjectAvatarInterstitialHistory](../models/uploadprojectavatarinterstitialhistory.md)[] | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `scanner`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `updatedAt`                                                                                            | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |