# UserEventPayload365Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload365Scope } from "@vercel/sdk/models/threehundredandfiftynine.js";

let value: UserEventPayload365Scope = "team";
```

## Values

```typescript
"organization" | "project" | "team"
```