# UserEventPayload519Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload519Scope } from "@vercel/sdk/models/usereventpayload471actortype.js";

let value: UserEventPayload519Scope = "user";
```

## Values

```typescript
"project" | "team" | "user"
```