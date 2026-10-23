# UserEventPayload384Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload384Scope } from "@vercel/sdk/models/threehundredandtwentythree.js";

let value: UserEventPayload384Scope = "organization";
```

## Values

```typescript
"organization" | "product" | "project" | "team"
```