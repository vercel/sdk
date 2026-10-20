# GetDeploymentResponseBodyDeploymentsTarget

If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.

## Example Usage

```typescript
import { GetDeploymentResponseBodyDeploymentsTarget } from "@vercel/sdk/models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody219type.js";

let value: GetDeploymentResponseBodyDeploymentsTarget = "production";
```

## Values

```typescript
"production" | "staging"
```