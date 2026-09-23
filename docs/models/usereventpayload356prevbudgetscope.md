# UserEventPayload356PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload356PrevBudgetScope } from "@vercel/sdk/models/payloadcity.js";

let value: UserEventPayload356PrevBudgetScope = "team";
```

## Values

```typescript
"organization" | "project" | "team"
```