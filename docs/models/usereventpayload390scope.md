# UserEventPayload390Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload390Scope } from "@vercel/sdk/models/usereventpayload390type.js";

let value: UserEventPayload390Scope = "project";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```