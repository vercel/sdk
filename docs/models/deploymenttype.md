# DeploymentType

Default Passport configuration for new projects in this team.

## Example Usage

```typescript
import { DeploymentType } from "@vercel/sdk/models/team.js";

let value: DeploymentType = "prod_deployment_urls_and_all_previews";
```

## Values

```typescript
"all" | "all_except_custom_domains" | "preview" | "prod_deployment_urls_and_all_previews"
```