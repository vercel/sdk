# GetDeploymentResponseBodyTarget

If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.

## Example Usage

```typescript
import { GetDeploymentResponseBodyTarget } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentResponseBodyTarget = "production";
```

## Values

```typescript
"staging" | "production"
```