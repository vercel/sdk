# UserEventPayload399Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload399Scope } from "@vercel/sdk/models/usereventprincipal4.js";

let value: UserEventPayload399Scope = "product";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```