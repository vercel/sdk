# UserEventPayload388PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload388PrevBudgetScope } from "@vercel/sdk/models/usereventpayload386type.js";

let value: UserEventPayload388PrevBudgetScope = "team";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```