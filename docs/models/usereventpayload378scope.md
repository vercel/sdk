# UserEventPayload378Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload378Scope } from "@vercel/sdk/models/usereventpayload375previous.js";

let value: UserEventPayload378Scope = "project";
```

## Values

```typescript
"organization" | "project" | "team"
```