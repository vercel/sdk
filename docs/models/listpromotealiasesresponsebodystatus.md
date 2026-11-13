# ListPromoteAliasesResponseBodyStatus

Whether the alias has been mapped to the deployment targeted by the last request. `pending` is also returned when the project has no request of the requested type, so it does not by itself indicate a running job.

## Example Usage

```typescript
import { ListPromoteAliasesResponseBodyStatus } from "@vercel/sdk/models/listpromotealiasesop.js";

let value: ListPromoteAliasesResponseBodyStatus = "pending";
```

## Values

```typescript
"completed" | "failed" | "pending"
```