# DeploymentSources1

## Example Usage

```typescript
import { DeploymentSources1 } from "@vercel/sdk/models/updateprojectprojectsresponsebuildmachineselection.js";

let value: DeploymentSources1 = {
  enabled: false,
  sources: [
    "deploy-hook",
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `enabled`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `sources`                                                                  | [models.DeploymentSourcesSources](../models/deploymentsourcessources.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |