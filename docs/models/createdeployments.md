# CreateDeployments

Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead

## Example Usage

```typescript
import { CreateDeployments } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: CreateDeployments = "disabled";
```

## Values

```typescript
"enabled" | "disabled"
```