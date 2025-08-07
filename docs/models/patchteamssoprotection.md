# PatchTeamSsoProtection

Ensures visitors to your Preview Deployments are logged into Vercel and have a minimum of Viewer access on your team

## Example Usage

```typescript
import { PatchTeamSsoProtection } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamSsoProtection = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `deploymentType`                                                                                            | [models.PatchTeamTeamsDeploymentType](../models/patchteamteamsdeploymenttype.md)                            | :heavy_minus_sign:                                                                                          | Specify if the Vercel Authentication (SSO Protection) will apply to every Deployment Target or just Preview |