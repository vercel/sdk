# UserEventPayload526Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload526Scope } from "@vercel/sdk/models/fourhundredandeightyseven.js";

let value: UserEventPayload526Scope = "team";
```

## Values

```typescript
"project" | "team" | "user"
```