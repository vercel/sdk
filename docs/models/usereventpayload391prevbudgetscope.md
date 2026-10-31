# UserEventPayload391PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload391PrevBudgetScope } from "@vercel/sdk/models/threehundredandthirtytwo.js";

let value: UserEventPayload391PrevBudgetScope = "team";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```