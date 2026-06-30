# GetProjectDeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { GetProjectDeploymentSources } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectDeploymentSources = {
  sources: [],
  enabled: false,
  environments: [
    {
      type: "system",
      target: "production",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `sources`                                                                    | [models.GetProjectProjectsSources](../models/getprojectprojectssources.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `enabled`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `environments`                                                               | *models.GetProjectProjectsEnvironments*[]                                    | :heavy_check_mark:                                                           | N/A                                                                          |