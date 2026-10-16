# UserEventPayload379Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload379Scope } from "@vercel/sdk/models/usereventpayload377type.js";

let value: UserEventPayload379Scope = "project";
```

## Values

```typescript
"organization" | "project" | "team"
```