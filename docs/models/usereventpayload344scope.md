# UserEventPayload344Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload344Scope } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: UserEventPayload344Scope = "project";
```

## Values

```typescript
"organization" | "project" | "team"
```