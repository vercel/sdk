# UserEventPayload463Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload463Scope } from "@vercel/sdk/models/fourhundredandten.js";

let value: UserEventPayload463Scope = "project";
```

## Values

```typescript
"project" | "team" | "user"
```