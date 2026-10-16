# UserEventPayload380Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload380Scope } from "@vercel/sdk/models/usereventpayload377type.js";

let value: UserEventPayload380Scope = "team";
```

## Values

```typescript
"organization" | "project" | "team"
```