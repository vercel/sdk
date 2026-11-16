# UserEventPayload403Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload403Scope } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: UserEventPayload403Scope = "project";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```