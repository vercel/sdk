# GetProjectDeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { GetProjectDeploymentSources } from "@vercel/sdk/models/getprojecthas2.js";

let value: GetProjectDeploymentSources = {
  enabled: true,
  environments: [
    {
      environmentId: "<id>",
      type: "custom",
    },
  ],
  sources: [],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `enabled`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `environments`                                               | *models.GetProjectEnvironments*[]                            | :heavy_check_mark:                                           | N/A                                                          |
| `sources`                                                    | [models.GetProjectSources](../models/getprojectsources.md)[] | :heavy_check_mark:                                           | N/A                                                          |