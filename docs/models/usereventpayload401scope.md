# UserEventPayload401Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload401Scope } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: UserEventPayload401Scope = "organization";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```