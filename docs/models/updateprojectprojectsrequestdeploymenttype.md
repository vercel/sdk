# UpdateProjectProjectsRequestDeploymentType

Specify if the Trusted IPs will apply to every Deployment Target or just Preview

## Example Usage

```typescript
import { UpdateProjectProjectsRequestDeploymentType } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectProjectsRequestDeploymentType = "all";
```

## Values

```typescript
"all" | "preview" | "production" | "prod_deployment_urls_and_all_previews"
```