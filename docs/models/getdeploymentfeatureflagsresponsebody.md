# GetDeploymentFeatureFlagsResponseBody

## Example Usage

```typescript
import { GetDeploymentFeatureFlagsResponseBody } from "@vercel/sdk/models/getdeploymentfeatureflagsop.js";

let value: GetDeploymentFeatureFlagsResponseBody = {
  flags: [
    {},
  ],
  status: {
    deploymentId: "<id>",
    projectId: "<id>",
    responseStatus: 809.53,
    flagCount: 1745.14,
    createdAt: 793.25,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `flags`                                                                                | [models.GetDeploymentFeatureFlagsFlags](../models/getdeploymentfeatureflagsflags.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [models.GetDeploymentFeatureFlagsStatus](../models/getdeploymentfeatureflagsstatus.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |