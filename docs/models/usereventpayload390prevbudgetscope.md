# UserEventPayload390PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload390PrevBudgetScope } from "@vercel/sdk/models/threehundredandthirtyone.js";

let value: UserEventPayload390PrevBudgetScope = "product";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```