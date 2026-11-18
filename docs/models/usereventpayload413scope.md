# UserEventPayload413Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload413Scope } from "@vercel/sdk/models/threehundredandseventyfive.js";

let value: UserEventPayload413Scope = "team";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```