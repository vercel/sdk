# UserEventPayload402PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload402PrevBudgetScope } from "@vercel/sdk/models/usereventprincipal4.js";

let value: UserEventPayload402PrevBudgetScope = "team";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```