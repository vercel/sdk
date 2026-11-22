# UserEventPayload417PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload417PrevBudgetScope } from "@vercel/sdk/models/threehundredandeightytwo.js";

let value: UserEventPayload417PrevBudgetScope = "project";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```