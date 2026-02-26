# CreateDeploymentDeploymentsCreator

The user on the external platform who triggered the deployment.

## Example Usage

```typescript
import { CreateDeploymentDeploymentsCreator } from "@vercel/sdk/models/createdeploymentop.js";

let value: CreateDeploymentDeploymentsCreator = {
  name: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `name`                                   | *string*                                 | :heavy_check_mark:                       | Display name of the platform user.       |
| `avatar`                                 | *string*                                 | :heavy_minus_sign:                       | URL of the platform user's avatar image. |