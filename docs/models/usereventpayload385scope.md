# UserEventPayload385Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload385Scope } from "@vercel/sdk/models/usereventpayload385type.js";

let value: UserEventPayload385Scope = "project";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```