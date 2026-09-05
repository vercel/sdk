# QueryParamStatus

Filter named sandboxes by status. Only valid when sortBy is createdAt.

## Example Usage

```typescript
import { QueryParamStatus } from "@vercel/sdk/models/listnamedsandboxesop.js";

let value: QueryParamStatus = "stopping";
```

## Values

```typescript
"running" | "stopping" | "stopped"
```