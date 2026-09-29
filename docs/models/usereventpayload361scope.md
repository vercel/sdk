# UserEventPayload361Scope

Which budget this is. Matches Copper SDK `BudgetScope`. Omitted on events published before team/org/project scopes existed (treat as team).

## Example Usage

```typescript
import { UserEventPayload361Scope } from "@vercel/sdk/models/usereventpayload354geolocationnames.js";

let value: UserEventPayload361Scope = "project";
```

## Values

```typescript
"organization" | "project" | "team"
```