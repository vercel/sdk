# GetMicrofrontendsInGroupAbuse

## Example Usage

```typescript
import { GetMicrofrontendsInGroupAbuse } from "@vercel/sdk/models/getmicrofrontendsingroupresponsebody.js";

let value: GetMicrofrontendsInGroupAbuse = {
  history: [],
  updatedAt: 8950.37,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `scanner`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `history`                                                                                | [models.GetMicrofrontendsInGroupHistory](../models/getmicrofrontendsingrouphistory.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `block`                                                                                  | [models.GetMicrofrontendsInGroupBlock](../models/getmicrofrontendsingroupblock.md)       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `blockHistory`                                                                           | *models.GetMicrofrontendsInGroupBlockHistory*[]                                          | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `interstitial`                                                                           | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |