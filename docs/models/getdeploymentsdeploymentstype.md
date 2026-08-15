# GetDeploymentsDeploymentsType

Principal type of the deployment creator. Defaults to `"user"` if absent (legacy deployments created before principal attribution was recorded).

## Example Usage

```typescript
import { GetDeploymentsDeploymentsType } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsDeploymentsType = "user";
```

## Values

```typescript
"app" | "integration" | "system" | "user"
```