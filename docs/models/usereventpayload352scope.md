# UserEventPayload352Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload352Scope } from "@vercel/sdk/models/payloadcity.js";

let value: UserEventPayload352Scope = "project";
```

## Values

```typescript
"organization" | "project" | "team"
```