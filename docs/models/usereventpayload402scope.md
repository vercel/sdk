# UserEventPayload402Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload402Scope } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: UserEventPayload402Scope = "organization";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```