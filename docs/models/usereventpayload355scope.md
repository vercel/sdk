# UserEventPayload355Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload355Scope } from "@vercel/sdk/models/payloadcity.js";

let value: UserEventPayload355Scope = "organization";
```

## Values

```typescript
"organization" | "project" | "team"
```