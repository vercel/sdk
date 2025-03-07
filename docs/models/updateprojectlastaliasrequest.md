# UpdateProjectLastAliasRequest

## Example Usage

```typescript
import { UpdateProjectLastAliasRequest } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectLastAliasRequest = {
  fromDeploymentId: "<id>",
  toDeploymentId: "<id>",
  jobStatus: "skipped",
  requestedAt: 8738.33,
  type: "rollback",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `fromDeploymentId`                                                                               | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `toDeploymentId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `jobStatus`                                                                                      | [models.UpdateProjectJobStatus](../models/updateprojectjobstatus.md)                             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `requestedAt`                                                                                    | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `type`                                                                                           | [models.UpdateProjectProjectsResponse200Type](../models/updateprojectprojectsresponse200type.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |