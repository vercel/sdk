# UpdateProjectDeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { UpdateProjectDeploymentSources } from "@vercel/sdk/models/updateprojectinternalroutes.js";

let value: UpdateProjectDeploymentSources = {
  sources: [],
  enabled: true,
  environments: [
    {
      type: "custom",
      environmentId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `sources`                                                                          | [models.UpdateProjectProjectsSources](../models/updateprojectprojectssources.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `enabled`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `environments`                                                                     | *models.UpdateProjectProjectsEnvironments*[]                                       | :heavy_check_mark:                                                                 | N/A                                                                                |