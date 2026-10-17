# UserEventPayload383PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload383PrevBudgetScope } from "@vercel/sdk/models/usereventpayload380type.js";

let value: UserEventPayload383PrevBudgetScope = "project";
```

## Values

```typescript
"organization" | "project" | "team"
```