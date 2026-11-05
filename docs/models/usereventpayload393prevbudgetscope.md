# UserEventPayload393PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload393PrevBudgetScope } from "@vercel/sdk/models/consent.js";

let value: UserEventPayload393PrevBudgetScope = "team";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```