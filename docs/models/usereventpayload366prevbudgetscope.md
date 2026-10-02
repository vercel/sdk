# UserEventPayload366PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload366PrevBudgetScope } from "@vercel/sdk/models/threehundredandsixty.js";

let value: UserEventPayload366PrevBudgetScope = "team";
```

## Values

```typescript
"organization" | "project" | "team"
```