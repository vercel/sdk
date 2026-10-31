# UserEventPayload389Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload389Scope } from "@vercel/sdk/models/threehundredandthirtytwo.js";

let value: UserEventPayload389Scope = "team";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```