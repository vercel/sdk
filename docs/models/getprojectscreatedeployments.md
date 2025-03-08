# GetProjectsCreateDeployments

Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead

## Example Usage

```typescript
import { GetProjectsCreateDeployments } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsCreateDeployments = "disabled";
```

## Values

```typescript
"enabled" | "disabled"
```