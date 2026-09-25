# UserEventPayload359PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload359PrevBudgetScope } from "@vercel/sdk/models/payloadcity.js";

let value: UserEventPayload359PrevBudgetScope = "organization";
```

## Values

```typescript
"organization" | "project" | "team"
```