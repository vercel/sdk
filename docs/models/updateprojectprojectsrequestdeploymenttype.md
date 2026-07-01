# UpdateProjectProjectsRequestDeploymentType

Specify if the Vercel Authentication (SSO Protection) will apply to every Deployment Target or just Preview

## Example Usage

```typescript
import { UpdateProjectProjectsRequestDeploymentType } from "@vercel/sdk/models/updateprojectprojectsbranchmatcher.js";

let value: UpdateProjectProjectsRequestDeploymentType = "preview";
```

## Values

```typescript
"all" | "preview" | "prod_deployment_urls_and_all_previews" | "all_except_custom_domains"
```