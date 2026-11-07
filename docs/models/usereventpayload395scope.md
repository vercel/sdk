# UserEventPayload395Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload395Scope } from "@vercel/sdk/models/principalintegration.js";

let value: UserEventPayload395Scope = "team";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```