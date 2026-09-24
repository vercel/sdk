# CreateProjectDeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { CreateProjectDeploymentSources } from "@vercel/sdk/models/createprojectcontenthint8.js";

let value: CreateProjectDeploymentSources = {
  enabled: false,
  environments: [
    {
      target: "preview",
      type: "system",
    },
  ],
  sources: [
    "cli",
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `enabled`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `environments`                                                     | *models.CreateProjectEnvironments*[]                               | :heavy_check_mark:                                                 | N/A                                                                |
| `sources`                                                          | [models.CreateProjectSources](../models/createprojectsources.md)[] | :heavy_check_mark:                                                 | N/A                                                                |