# UserEventPayload392Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload392Scope } from "@vercel/sdk/models/consent.js";

let value: UserEventPayload392Scope = "product";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```