# UserEventPayload374PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload374PrevBudgetScope } from "@vercel/sdk/models/threehundredandsixtyeight.js";

let value: UserEventPayload374PrevBudgetScope = "team";
```

## Values

```typescript
"organization" | "project" | "team"
```