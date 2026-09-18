# UserEventPayload350Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload350Scope } from "@vercel/sdk/models/payloadcountry.js";

let value: UserEventPayload350Scope = "team";
```

## Values

```typescript
"organization" | "project" | "team"
```