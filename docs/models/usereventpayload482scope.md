# UserEventPayload482Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload482Scope } from "@vercel/sdk/models/fourhundredandtwentynine.js";

let value: UserEventPayload482Scope = "user";
```

## Values

```typescript
"project" | "team" | "user"
```