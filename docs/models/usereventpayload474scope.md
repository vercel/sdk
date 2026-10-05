# UserEventPayload474Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload474Scope } from "@vercel/sdk/models/fourhundredandtwentyone.js";

let value: UserEventPayload474Scope = "user";
```

## Values

```typescript
"project" | "team" | "user"
```