# UserEventPayload377PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload377PrevBudgetScope } from "@vercel/sdk/models/usereventpayload373previous.js";

let value: UserEventPayload377PrevBudgetScope = "team";
```

## Values

```typescript
"organization" | "project" | "team"
```