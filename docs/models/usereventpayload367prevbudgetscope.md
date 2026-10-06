# UserEventPayload367PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload367PrevBudgetScope } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: UserEventPayload367PrevBudgetScope = "organization";
```

## Values

```typescript
"organization" | "project" | "team"
```