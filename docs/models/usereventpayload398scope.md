# UserEventPayload398Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload398Scope } from "@vercel/sdk/models/principalintegration.js";

let value: UserEventPayload398Scope = "team";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```