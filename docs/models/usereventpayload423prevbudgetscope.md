# UserEventPayload423PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload423PrevBudgetScope } from "@vercel/sdk/models/threehundredandeightysix.js";

let value: UserEventPayload423PrevBudgetScope = "project";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```