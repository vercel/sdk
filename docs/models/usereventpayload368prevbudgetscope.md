# UserEventPayload368PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload368PrevBudgetScope } from "@vercel/sdk/models/threehundredandsixtytwo.js";

let value: UserEventPayload368PrevBudgetScope = "organization";
```

## Values

```typescript
"organization" | "project" | "team"
```