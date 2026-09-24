# UpdateMicrofrontendsAbuse

## Example Usage

```typescript
import { UpdateMicrofrontendsAbuse } from "@vercel/sdk/models/updatemicrofrontendscreatedeployments.js";

let value: UpdateMicrofrontendsAbuse = {
  history: [],
  updatedAt: 2875.63,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `block`                                                                                                  | [models.UpdateMicrofrontendsBlock](../models/updatemicrofrontendsblock.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `blockHistory`                                                                                           | *models.UpdateMicrofrontendsBlockHistory*[]                                                              | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `history`                                                                                                | [models.UpdateMicrofrontendsHistory](../models/updatemicrofrontendshistory.md)[]                         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `interstitial`                                                                                           | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `interstitialHistory`                                                                                    | [models.UpdateMicrofrontendsInterstitialHistory](../models/updatemicrofrontendsinterstitialhistory.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `scanner`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `updatedAt`                                                                                              | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |