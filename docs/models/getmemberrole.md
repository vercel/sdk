# GetMemberRole

"The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles."

## Example Usage

```typescript
import { GetMemberRole } from "@vercel/sdk/models/getmemberop.js";

let value: GetMemberRole = "USER";
```

## Values

```typescript
"ADMIN" | "USER"
```