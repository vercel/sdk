# UserEventPayload341Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload341Scope } from "@vercel/sdk/models/twohundredandeightyone.js";

let value: UserEventPayload341Scope = "project";
```

## Values

```typescript
"organization" | "project" | "team"
```