# UserEventPayload493Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload493Scope } from "@vercel/sdk/models/fourhundredandfortyone.js";

let value: UserEventPayload493Scope = "user";
```

## Values

```typescript
"project" | "team" | "user"
```