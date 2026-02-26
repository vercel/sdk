# CancelDeploymentOrigin

Reference back to the entity on the platform that initiated the deployment.

## Example Usage

```typescript
import { CancelDeploymentOrigin } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentOrigin = {
  type: "id",
  value: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [models.CancelDeploymentDeploymentsType](../models/canceldeploymentdeploymentstype.md) | :heavy_check_mark:                                                                     | Whether the value is an opaque identifier or a URL.                                    |
| `value`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | The identifier or URL pointing to the originating entity.                              |