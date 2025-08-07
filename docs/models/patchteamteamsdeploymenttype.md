# PatchTeamTeamsDeploymentType

Specify if the Vercel Authentication (SSO Protection) will apply to every Deployment Target or just Preview

## Example Usage

```typescript
import { PatchTeamTeamsDeploymentType } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamTeamsDeploymentType = "all";
```

## Values

```typescript
"all" | "preview" | "prod_deployment_urls_and_all_previews" | "all_except_custom_domains"
```