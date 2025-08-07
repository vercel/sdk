# PatchTeamDeploymentType

Specify if the password will apply to every Deployment Target or just Preview

## Example Usage

```typescript
import { PatchTeamDeploymentType } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamDeploymentType = "preview";
```

## Values

```typescript
"all" | "preview" | "prod_deployment_urls_and_all_previews" | "all_except_custom_domains"
```