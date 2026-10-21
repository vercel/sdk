# UserEventPayload383Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload383Scope } from "@vercel/sdk/models/usereventpayload381budget.js";

let value: UserEventPayload383Scope = "organization";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```