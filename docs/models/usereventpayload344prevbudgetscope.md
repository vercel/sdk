# UserEventPayload344PrevBudgetScope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload344PrevBudgetScope } from "@vercel/sdk/models/threehundredandfortytwo.js";

let value: UserEventPayload344PrevBudgetScope = "team";
```

## Values

```typescript
"organization" | "project" | "team"
```