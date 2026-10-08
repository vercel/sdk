# UserEventPayload480Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload480Scope } from "@vercel/sdk/models/fourhundredandtwentyseven.js";

let value: UserEventPayload480Scope = "team";
```

## Values

```typescript
"project" | "team" | "user"
```