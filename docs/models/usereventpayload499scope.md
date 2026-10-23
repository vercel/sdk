# UserEventPayload499Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload499Scope } from "@vercel/sdk/models/fourhundredandfortynine.js";

let value: UserEventPayload499Scope = "user";
```

## Values

```typescript
"project" | "team" | "user"
```