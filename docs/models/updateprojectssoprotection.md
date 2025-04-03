# UpdateProjectSsoProtection

Ensures visitors to your Preview Deployments are logged into Vercel and have a minimum of Viewer access on your team

## Example Usage

```typescript
import { UpdateProjectSsoProtection } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectSsoProtection = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `deploymentType`                                                                                            | [models.UpdateProjectProjectsDeploymentType](../models/updateprojectprojectsdeploymenttype.md)              | :heavy_minus_sign:                                                                                          | Specify if the Vercel Authentication (SSO Protection) will apply to every Deployment Target or just Preview |