# GetProjectCreateDeployments

Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead

## Example Usage

```typescript
import { GetProjectCreateDeployments } from "@vercel/sdk/models/getprojectdestination.js";

let value: GetProjectCreateDeployments = "enabled";
```

## Values

```typescript
"disabled" | "enabled"
```