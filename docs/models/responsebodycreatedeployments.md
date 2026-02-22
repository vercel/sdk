# ResponseBodyCreateDeployments

Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead

## Example Usage

```typescript
import { ResponseBodyCreateDeployments } from "@vercel/sdk/models/getprojectsrouteprojects1.js";

let value: ResponseBodyCreateDeployments = "disabled";
```

## Values

```typescript
"enabled" | "disabled"
```