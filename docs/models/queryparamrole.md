# QueryParamRole

Only return members with the specified team role.

## Example Usage

```typescript
import { QueryParamRole } from "@vercel/sdk/models/getteammembersop.js";

let value: QueryParamRole = "OWNER";
```

## Values

```typescript
"OWNER" | "MEMBER" | "DEVELOPER" | "VIEWER" | "BILLING" | "CONTRIBUTOR"
```