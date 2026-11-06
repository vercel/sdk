# UserEventPayload513Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload513Scope } from "@vercel/sdk/models/usereventpayload465actortype.js";

let value: UserEventPayload513Scope = "project";
```

## Values

```typescript
"project" | "team" | "user"
```