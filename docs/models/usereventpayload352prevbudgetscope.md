# UserEventPayload352PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload352PrevBudgetScope } from "@vercel/sdk/models/payloadcountry.js";

let value: UserEventPayload352PrevBudgetScope = "organization";
```

## Values

```typescript
"organization" | "project" | "team"
```