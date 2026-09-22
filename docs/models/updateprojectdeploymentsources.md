# UpdateProjectDeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { UpdateProjectDeploymentSources } from "@vercel/sdk/models/updateprojectprojectsresourceconfig.js";

let value: UpdateProjectDeploymentSources = {
  enabled: true,
  environments: [],
  sources: [
    "integration",
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `enabled`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `environments`                                                     | *models.UpdateProjectEnvironments*[]                               | :heavy_check_mark:                                                 | N/A                                                                |
| `sources`                                                          | [models.UpdateProjectSources](../models/updateprojectsources.md)[] | :heavy_check_mark:                                                 | N/A                                                                |