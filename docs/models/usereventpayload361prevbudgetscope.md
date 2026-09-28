# UserEventPayload361PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload361PrevBudgetScope } from "@vercel/sdk/models/usereventpayload353geolocationnames.js";

let value: UserEventPayload361PrevBudgetScope = "organization";
```

## Values

```typescript
"organization" | "project" | "team"
```