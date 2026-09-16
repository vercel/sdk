# UserEventPayload345Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload345Scope } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: UserEventPayload345Scope = "project";
```

## Values

```typescript
"organization" | "project" | "team"
```