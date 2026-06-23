# UpdateProjectCreateDeployments

Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead

## Example Usage

```typescript
import { UpdateProjectCreateDeployments } from "@vercel/sdk/models/updateprojectinternalroutes.js";

let value: UpdateProjectCreateDeployments = "disabled";
```

## Values

```typescript
"disabled" | "enabled"
```