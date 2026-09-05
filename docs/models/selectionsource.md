# SelectionSource

The setting which selected the build machine when the deployment was created. Frozen here so later project or team changes do not rewrite its history.

## Example Usage

```typescript
import { SelectionSource } from "@vercel/sdk/models/locale.js";

let value: SelectionSource = "plan-default";
```

## Values

```typescript
"elastic-algorithm" | "plan-default" | "project-setting" | "team-setting"
```