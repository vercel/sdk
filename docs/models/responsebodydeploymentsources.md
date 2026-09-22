# ResponseBodyDeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { ResponseBodyDeploymentSources } from "@vercel/sdk/models/getprojectsresponsebodyprojectsframework.js";

let value: ResponseBodyDeploymentSources = {
  enabled: false,
  environments: [],
  sources: [
    "integration",
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `enabled`                                                        | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `environments`                                                   | *models.GetProjectsResponseBodyEnvironments*[]                   | :heavy_check_mark:                                               | N/A                                                              |
| `sources`                                                        | [models.ResponseBodySources](../models/responsebodysources.md)[] | :heavy_check_mark:                                               | N/A                                                              |