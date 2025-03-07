# UpdateProjectCreateDeployments

Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead

## Example Usage

```typescript
import { UpdateProjectCreateDeployments } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectCreateDeployments = "enabled";
```

## Values

```typescript
"enabled" | "disabled"
```