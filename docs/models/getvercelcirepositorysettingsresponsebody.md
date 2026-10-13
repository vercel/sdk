# GetVercelCiRepositorySettingsResponseBody

Successfully fetched the repository settings.

## Example Usage

```typescript
import { GetVercelCiRepositorySettingsResponseBody } from "@vercel/sdk/models/getvercelcirepositorysettingsop.js";

let value: GetVercelCiRepositorySettingsResponseBody = {
  provider: "cursor-origin",
  organizationId: "<id>",
  repository: "<value>",
  ciEnabled: true,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `provider`                                                                                         | [models.GetVercelCiRepositorySettingsProvider](../models/getvercelcirepositorysettingsprovider.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `organizationId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `repository`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `ciEnabled`                                                                                        | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `ciEnabledAt`                                                                                      | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |