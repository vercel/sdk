# UserEventPayload473Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload473Scope } from "@vercel/sdk/models/fourhundredandtwenty.js";

let value: UserEventPayload473Scope = "project";
```

## Values

```typescript
"project" | "team" | "user"
```