# GetDeploymentResponseBodyDeploymentsCreator

The user on the external platform who triggered the deployment.

## Example Usage

```typescript
import { GetDeploymentResponseBodyDeploymentsCreator } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentResponseBodyDeploymentsCreator = {
  name: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `name`                                   | *string*                                 | :heavy_check_mark:                       | Display name of the platform user.       |
| `avatar`                                 | *string*                                 | :heavy_minus_sign:                       | URL of the platform user's avatar image. |