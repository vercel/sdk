# PatchTeamPasswordProtection

Allows to protect project deployments with a password

## Example Usage

```typescript
import { PatchTeamPasswordProtection } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamPasswordProtection = {
  deploymentType: "all",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `deploymentType`                                                              | [models.PatchTeamDeploymentType](../models/patchteamdeploymenttype.md)        | :heavy_check_mark:                                                            | Specify if the password will apply to every Deployment Target or just Preview |
| `password`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | The password that will be used to protect Project Deployments                 |