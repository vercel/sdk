# UserEventPayload399PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload399PrevBudgetScope } from "@vercel/sdk/models/usereventprincipal4.js";

let value: UserEventPayload399PrevBudgetScope = "organization";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```