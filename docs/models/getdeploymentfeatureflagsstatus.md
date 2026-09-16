# GetDeploymentFeatureFlagsStatus

## Example Usage

```typescript
import { GetDeploymentFeatureFlagsStatus } from "@vercel/sdk/models/getdeploymentfeatureflagsop.js";

let value: GetDeploymentFeatureFlagsStatus = {
  createdAt: 9389.17,
  deploymentId: "<id>",
  flagCount: 5682.84,
  projectId: "<id>",
  responseStatus: 7730.78,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `createdAt`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `deploymentId`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `flagCount`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | The number of flag definitions returned by the flags discovery endpoint. |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `responseStatus`                                                         | *number*                                                                 | :heavy_check_mark:                                                       | The HTTP status code from the flags discovery endpoint.                  |