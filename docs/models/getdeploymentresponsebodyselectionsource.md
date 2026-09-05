# GetDeploymentResponseBodySelectionSource

The setting which selected the build machine when the deployment was created. Frozen here so later project or team changes do not rewrite its history.

## Example Usage

```typescript
import { GetDeploymentResponseBodySelectionSource } from "@vercel/sdk/models/getdeploymentgitsourcedeploymentsresponse200type.js";

let value: GetDeploymentResponseBodySelectionSource = "project-setting";
```

## Values

```typescript
"elastic-algorithm" | "plan-default" | "project-setting" | "team-setting"
```