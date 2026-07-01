# UpdateProjectProjectsRequestRequestBodyDeploymentType

Specify if the Trusted IPs will apply to every Deployment Target or just Preview

## Example Usage

```typescript
import { UpdateProjectProjectsRequestRequestBodyDeploymentType } from "@vercel/sdk/models/updateprojectprojectsbranchmatcher.js";

let value: UpdateProjectProjectsRequestRequestBodyDeploymentType = "preview";
```

## Values

```typescript
"all" | "preview" | "production" | "prod_deployment_urls_and_all_previews" | "all_except_custom_domains"
```