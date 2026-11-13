# MembershipSource

The source controlling this member's team access and roles. Individual permissions may have a different source. This does not replace authorization checks.

## Example Usage

```typescript
import { MembershipSource } from "@vercel/sdk/models/getteammembersop.js";

let value: MembershipSource = "direct";
```

## Values

```typescript
"direct" | "organization-directory" | "team-directory"
```