# ResponseBodyDeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { ResponseBodyDeploymentSources } from "@vercel/sdk/models/getprojectsresponsebodylink.js";

let value: ResponseBodyDeploymentSources = {
  sources: [
    "cli",
  ],
  enabled: false,
  environments: [
    {
      type: "system",
      target: "preview",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `sources`                                                                              | [models.GetProjectsResponseBodySources](../models/getprojectsresponsebodysources.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `enabled`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `environments`                                                                         | *models.GetProjectsResponseBodyProjectsEnvironments*[]                                 | :heavy_check_mark:                                                                     | N/A                                                                                    |