# UserEventPayloadScope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayloadScope } from "@vercel/sdk/models/fourhundredandone.js";

let value: UserEventPayloadScope = "project";
```

## Values

```typescript
"project" | "team" | "user"
```