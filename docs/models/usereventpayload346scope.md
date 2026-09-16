# UserEventPayload346Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload346Scope } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: UserEventPayload346Scope = "project";
```

## Values

```typescript
"organization" | "project" | "team"
```