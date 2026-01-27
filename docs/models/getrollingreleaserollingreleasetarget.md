# GetRollingReleaseRollingReleaseTarget

If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.

## Example Usage

```typescript
import { GetRollingReleaseRollingReleaseTarget } from "@vercel/sdk/models/getrollingreleaseop.js";

let value: GetRollingReleaseRollingReleaseTarget = "staging";
```

## Values

```typescript
"staging" | "production"
```