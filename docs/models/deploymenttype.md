# DeploymentType

Default Passport configuration for new projects in this team.

## Example Usage

```typescript
import { DeploymentType } from "@vercel/sdk/models/team.js";

let value: DeploymentType = "all_except_custom_domains";
```

## Values

```typescript
"all" | "preview" | "prod_deployment_urls_and_all_previews" | "all_except_custom_domains"
```