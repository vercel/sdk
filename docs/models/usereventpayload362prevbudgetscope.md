# UserEventPayload362PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload362PrevBudgetScope } from "@vercel/sdk/models/usereventpayload354geolocationnames.js";

let value: UserEventPayload362PrevBudgetScope = "team";
```

## Values

```typescript
"organization" | "project" | "team"
```