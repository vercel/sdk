# UserEventPayload418Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload418Scope } from "@vercel/sdk/models/payloadstaticips.js";

let value: UserEventPayload418Scope = "product";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```