# UserEventPayload367Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload367Scope } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: UserEventPayload367Scope = "project";
```

## Values

```typescript
"organization" | "project" | "team"
```