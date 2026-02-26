# ResponseBodyOrigin

Reference back to the entity on the platform that initiated the deployment.

## Example Usage

```typescript
import { ResponseBodyOrigin } from "@vercel/sdk/models/getdeploymentop.js";

let value: ResponseBodyOrigin = {
  type: "id",
  value: "<value>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [models.GetDeploymentResponseBodyDeploymentsResponseType](../models/getdeploymentresponsebodydeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                       | Whether the value is an opaque identifier or a URL.                                                                      |
| `value`                                                                                                                  | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The identifier or URL pointing to the originating entity.                                                                |