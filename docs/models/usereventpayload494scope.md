# UserEventPayload494Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload494Scope } from "@vercel/sdk/models/fourhundredandfortyfour.js";

let value: UserEventPayload494Scope = "project";
```

## Values

```typescript
"project" | "team" | "user"
```