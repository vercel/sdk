# UserEventPayload358PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload358PrevBudgetScope } from "@vercel/sdk/models/payloadcity.js";

let value: UserEventPayload358PrevBudgetScope = "organization";
```

## Values

```typescript
"organization" | "project" | "team"
```