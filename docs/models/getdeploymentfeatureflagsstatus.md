# GetDeploymentFeatureFlagsStatus

## Example Usage

```typescript
import { GetDeploymentFeatureFlagsStatus } from "@vercel/sdk/models/getdeploymentfeatureflagsop.js";

let value: GetDeploymentFeatureFlagsStatus = {
  deploymentId: "<id>",
  projectId: "<id>",
  responseStatus: 9389.17,
  flagCount: 5682.84,
  createdAt: 7730.78,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `deploymentId`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `responseStatus`                                                         | *number*                                                                 | :heavy_check_mark:                                                       | The HTTP status code from the flags discovery endpoint.                  |
| `flagCount`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | The number of flag definitions returned by the flags discovery endpoint. |
| `createdAt`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |