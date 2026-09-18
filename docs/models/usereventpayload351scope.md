# UserEventPayload351Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload351Scope } from "@vercel/sdk/models/payloadcountry.js";

let value: UserEventPayload351Scope = "project";
```

## Values

```typescript
"organization" | "project" | "team"
```