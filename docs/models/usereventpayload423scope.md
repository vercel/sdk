# UserEventPayload423Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload423Scope } from "@vercel/sdk/models/threehundredandeightysix.js";

let value: UserEventPayload423Scope = "product";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```