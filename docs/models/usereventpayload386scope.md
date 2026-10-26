# UserEventPayload386Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload386Scope } from "@vercel/sdk/models/usereventpayload386type.js";

let value: UserEventPayload386Scope = "project";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```