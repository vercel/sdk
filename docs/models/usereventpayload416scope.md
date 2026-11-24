# UserEventPayload416Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload416Scope } from "@vercel/sdk/models/payloadstaticips.js";

let value: UserEventPayload416Scope = "project";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```