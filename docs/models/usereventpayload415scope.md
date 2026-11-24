# UserEventPayload415Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload415Scope } from "@vercel/sdk/models/payloadstaticips.js";

let value: UserEventPayload415Scope = "project";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```