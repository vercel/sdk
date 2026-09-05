# ResponseBodySelectionSource

The setting which selected the build machine when the deployment was created. Frozen here so later project or team changes do not rewrite its history.

## Example Usage

```typescript
import { ResponseBodySelectionSource } from "@vercel/sdk/models/createdeploymenthasdeploymentstype.js";

let value: ResponseBodySelectionSource = "team-setting";
```

## Values

```typescript
"elastic-algorithm" | "plan-default" | "project-setting" | "team-setting"
```