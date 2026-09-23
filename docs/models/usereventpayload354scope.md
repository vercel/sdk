# UserEventPayload354Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload354Scope } from "@vercel/sdk/models/payloadcity.js";

let value: UserEventPayload354Scope = "team";
```

## Values

```typescript
"organization" | "project" | "team"
```