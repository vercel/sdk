# UserEventPayload398PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload398PrevBudgetScope } from "@vercel/sdk/models/principalapp.js";

let value: UserEventPayload398PrevBudgetScope = "organization";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```