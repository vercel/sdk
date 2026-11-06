# UserEventPayload394PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload394PrevBudgetScope } from "@vercel/sdk/models/consent.js";

let value: UserEventPayload394PrevBudgetScope = "product";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```