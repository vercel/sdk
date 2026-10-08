# UserEventPayload370Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload370Scope } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: UserEventPayload370Scope = "team";
```

## Values

```typescript
"organization" | "project" | "team"
```