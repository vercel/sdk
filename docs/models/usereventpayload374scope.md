# UserEventPayload374Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload374Scope } from "@vercel/sdk/models/usereventpayload373previous.js";

let value: UserEventPayload374Scope = "team";
```

## Values

```typescript
"organization" | "project" | "team"
```