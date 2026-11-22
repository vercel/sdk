# UserEventPayload550Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload550Scope } from "@vercel/sdk/models/payloadoutcome.js";

let value: UserEventPayload550Scope = "user";
```

## Values

```typescript
"project" | "team" | "user"
```