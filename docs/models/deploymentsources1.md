# DeploymentSources1

## Example Usage

```typescript
import { DeploymentSources1 } from "@vercel/sdk/models/updateprojectprojectsfunctiondefaultmemorytype.js";

let value: DeploymentSources1 = {
  enabled: false,
  environments: [
    {
      type: "custom",
      environmentId: "<id>",
    },
  ],
  sources: [
    "cli",
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `enabled`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `environments`                                                             | *models.DeploymentSourcesEnvironments*[]                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `sources`                                                                  | [models.DeploymentSourcesSources](../models/deploymentsourcessources.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |