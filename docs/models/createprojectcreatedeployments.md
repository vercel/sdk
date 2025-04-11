# CreateProjectCreateDeployments

Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead

## Example Usage

```typescript
import { CreateProjectCreateDeployments } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectCreateDeployments = "disabled";
```

## Values

```typescript
"enabled" | "disabled"
```