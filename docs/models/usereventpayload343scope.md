# UserEventPayload343Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload343Scope } from "@vercel/sdk/models/threehundredandfortytwo.js";

let value: UserEventPayload343Scope = "organization";
```

## Values

```typescript
"organization" | "project" | "team"
```