# UserEventPayload507Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload507Scope } from "@vercel/sdk/models/usereventpayload458actortype.js";

let value: UserEventPayload507Scope = "project";
```

## Values

```typescript
"project" | "team" | "user"
```