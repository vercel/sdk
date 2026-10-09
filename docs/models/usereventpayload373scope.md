# UserEventPayload373Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload373Scope } from "@vercel/sdk/models/threehundredandsixtyeight.js";

let value: UserEventPayload373Scope = "team";
```

## Values

```typescript
"organization" | "project" | "team"
```