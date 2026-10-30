# UserEventPayload387Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload387Scope } from "@vercel/sdk/models/threehundredandthirtyone.js";

let value: UserEventPayload387Scope = "project";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```