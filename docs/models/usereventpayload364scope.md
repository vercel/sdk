# UserEventPayload364Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload364Scope } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: UserEventPayload364Scope = "project";
```

## Values

```typescript
"organization" | "project" | "team"
```