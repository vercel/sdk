# ResponseBodyCreateDeployments

Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead

## Example Usage

```typescript
import { ResponseBodyCreateDeployments } from "@vercel/sdk/models/getprojectsblockhistoryprojectsroute.js";

let value: ResponseBodyCreateDeployments = "enabled";
```

## Values

```typescript
"disabled" | "enabled"
```