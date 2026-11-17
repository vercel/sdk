# UserEventPayload404Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload404Scope } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: UserEventPayload404Scope = "project";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```