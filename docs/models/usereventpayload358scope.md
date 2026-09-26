# UserEventPayload358Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload358Scope } from "@vercel/sdk/models/usereventpayload351geolocationnames.js";

let value: UserEventPayload358Scope = "project";
```

## Values

```typescript
"organization" | "project" | "team"
```