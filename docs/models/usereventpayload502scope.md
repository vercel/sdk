# UserEventPayload502Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload502Scope } from "@vercel/sdk/models/usereventpayload453actortype.js";

let value: UserEventPayload502Scope = "user";
```

## Values

```typescript
"project" | "team" | "user"
```