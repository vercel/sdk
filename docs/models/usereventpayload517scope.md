# UserEventPayload517Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload517Scope } from "@vercel/sdk/models/usereventpayload469actortype.js";

let value: UserEventPayload517Scope = "team";
```

## Values

```typescript
"project" | "team" | "user"
```