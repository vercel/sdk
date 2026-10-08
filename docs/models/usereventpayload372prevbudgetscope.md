# UserEventPayload372PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload372PrevBudgetScope } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: UserEventPayload372PrevBudgetScope = "project";
```

## Values

```typescript
"organization" | "project" | "team"
```