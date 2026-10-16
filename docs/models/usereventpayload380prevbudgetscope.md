# UserEventPayload380PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload380PrevBudgetScope } from "@vercel/sdk/models/usereventpayload377type.js";

let value: UserEventPayload380PrevBudgetScope = "organization";
```

## Values

```typescript
"organization" | "project" | "team"
```