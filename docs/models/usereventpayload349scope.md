# UserEventPayload349Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload349Scope } from "@vercel/sdk/models/payloadcountry.js";

let value: UserEventPayload349Scope = "project";
```

## Values

```typescript
"organization" | "project" | "team"
```