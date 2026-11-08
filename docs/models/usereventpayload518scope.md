# UserEventPayload518Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload518Scope } from "@vercel/sdk/models/usereventpayload470actortype.js";

let value: UserEventPayload518Scope = "team";
```

## Values

```typescript
"project" | "team" | "user"
```