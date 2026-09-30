# UserEventPayload363Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload363Scope } from "@vercel/sdk/models/threehundredandfiftynine.js";

let value: UserEventPayload363Scope = "organization";
```

## Values

```typescript
"organization" | "project" | "team"
```