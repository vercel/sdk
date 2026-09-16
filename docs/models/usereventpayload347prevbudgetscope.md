# UserEventPayload347PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload347PrevBudgetScope } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: UserEventPayload347PrevBudgetScope = "team";
```

## Values

```typescript
"organization" | "project" | "team"
```