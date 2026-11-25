# UserEventPayload422PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload422PrevBudgetScope } from "@vercel/sdk/models/usereventpayload385project.js";

let value: UserEventPayload422PrevBudgetScope = "organization";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```