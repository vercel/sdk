# UserEventPayload464Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload464Scope } from "@vercel/sdk/models/fourhundredandeleven.js";

let value: UserEventPayload464Scope = "project";
```

## Values

```typescript
"project" | "team" | "user"
```