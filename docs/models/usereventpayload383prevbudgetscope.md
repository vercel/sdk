# UserEventPayload383PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload383PrevBudgetScope } from "@vercel/sdk/models/usereventpayload381budget.js";

let value: UserEventPayload383PrevBudgetScope = "project";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```