# PatchTeamDefaultDeploymentProtection

Default deployment protection settings for new projects.

## Example Usage

```typescript
import { PatchTeamDefaultDeploymentProtection } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamDefaultDeploymentProtection = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `passwordProtection`                                                                                                 | [models.PatchTeamPasswordProtection](../models/patchteampasswordprotection.md)                                       | :heavy_minus_sign:                                                                                                   | Allows to protect project deployments with a password                                                                |
| `ssoProtection`                                                                                                      | [models.PatchTeamSsoProtection](../models/patchteamssoprotection.md)                                                 | :heavy_minus_sign:                                                                                                   | Ensures visitors to your Preview Deployments are logged into Vercel and have a minimum of Viewer access on your team |