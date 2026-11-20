# UserEventPayload413PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload413PrevBudgetScope } from "@vercel/sdk/models/oldssoprotection2.js";

let value: UserEventPayload413PrevBudgetScope = "project";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```