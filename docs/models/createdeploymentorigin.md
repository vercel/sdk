# CreateDeploymentOrigin

Reference back to the entity on the platform that initiated the deployment.

## Example Usage

```typescript
import { CreateDeploymentOrigin } from "@vercel/sdk/models/createdeploymentop.js";

let value: CreateDeploymentOrigin = {
  type: "url",
  value: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [models.CreateDeploymentDeploymentsType](../models/createdeploymentdeploymentstype.md) | :heavy_check_mark:                                                                     | Whether the value is an opaque identifier or a URL.                                    |
| `value`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | The identifier or URL pointing to the originating entity.                              |