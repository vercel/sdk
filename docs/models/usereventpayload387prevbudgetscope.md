# UserEventPayload387PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload387PrevBudgetScope } from "@vercel/sdk/models/usereventpayload385type.js";

let value: UserEventPayload387PrevBudgetScope = "organization";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```