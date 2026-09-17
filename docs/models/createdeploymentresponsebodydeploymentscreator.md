# CreateDeploymentResponseBodyDeploymentsCreator

The user on the external platform who triggered the deployment.

## Example Usage

```typescript
import { CreateDeploymentResponseBodyDeploymentsCreator } from "@vercel/sdk/models/createdeploymentmissingdeploymentsresponse200applicationjsonvalue.js";

let value: CreateDeploymentResponseBodyDeploymentsCreator = {
  name: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `avatar`                                 | *string*                                 | :heavy_minus_sign:                       | URL of the platform user's avatar image. |
| `name`                                   | *string*                                 | :heavy_check_mark:                       | Display name of the platform user.       |