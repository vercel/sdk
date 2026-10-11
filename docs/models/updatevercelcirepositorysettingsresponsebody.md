# UpdateVercelCiRepositorySettingsResponseBody

Successfully updated the repository settings.

## Example Usage

```typescript
import { UpdateVercelCiRepositorySettingsResponseBody } from "@vercel/sdk/models/updatevercelcirepositorysettingsop.js";

let value: UpdateVercelCiRepositorySettingsResponseBody = {
  provider: "vercel",
  organizationId: "<id>",
  repository: "<value>",
  ciEnabled: true,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `provider`                                                                                               | [models.UpdateVercelCiRepositorySettingsProvider](../models/updatevercelcirepositorysettingsprovider.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `organizationId`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `repository`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `ciEnabled`                                                                                              | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `ciEnabledAt`                                                                                            | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `updatedAt`                                                                                              | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |