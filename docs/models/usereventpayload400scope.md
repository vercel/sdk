# UserEventPayload400Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload400Scope } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: UserEventPayload400Scope = "team";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```