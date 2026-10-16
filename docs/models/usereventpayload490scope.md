# UserEventPayload490Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload490Scope } from "@vercel/sdk/models/fourhundredandthirtyeight.js";

let value: UserEventPayload490Scope = "project";
```

## Values

```typescript
"project" | "team" | "user"
```