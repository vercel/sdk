# UserEventPayload381Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload381Scope } from "@vercel/sdk/models/usereventpayload381budget.js";

let value: UserEventPayload381Scope = "team";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```