# CreateDeploymentResponseBodyDeploymentsTarget

If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.

## Example Usage

```typescript
import { CreateDeploymentResponseBodyDeploymentsTarget } from "@vercel/sdk/models/createdeploymentvaluedeploymentsresponse2.js";

let value: CreateDeploymentResponseBodyDeploymentsTarget = "production";
```

## Values

```typescript
"production" | "staging"
```