# UserEventPayload396Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload396Scope } from "@vercel/sdk/models/principalintegration.js";

let value: UserEventPayload396Scope = "organization";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```