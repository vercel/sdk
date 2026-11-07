# UserEventPayload397Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload397Scope } from "@vercel/sdk/models/principalintegration.js";

let value: UserEventPayload397Scope = "product";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```