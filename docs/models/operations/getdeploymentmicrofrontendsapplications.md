# GetDeploymentMicrofrontendsApplications

A map of the other applications that are part of this group. Only defined on the default application. The field is set after deployments have been created, so can be undefined, but should be there for a successful deployment.

## Example Usage

```typescript
import { GetDeploymentMicrofrontendsApplications } from "@vercel/sdk/models/operations/getdeployment.js";

let value: GetDeploymentMicrofrontendsApplications = {
  productionHost: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `productionHost`                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                   | This is the production alias, it will always show the most up to date of each application.                                                                                                                                                                           |
| `deploymentAlias`                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                   | Use the fixed deploymentAlias and deploymentHost so that the microfrontend preview stays in sync with the deployment. These are only present for mono-repos when a single commit creates multiple deployments. If they are not present, productionHost will be used. |
| `deploymentHost`                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                  |