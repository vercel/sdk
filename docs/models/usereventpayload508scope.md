# UserEventPayload508Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload508Scope } from "@vercel/sdk/models/usereventpayload459actortype.js";

let value: UserEventPayload508Scope = "team";
```

## Values

```typescript
"project" | "team" | "user"
```