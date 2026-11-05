# UserEventPayload512Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload512Scope } from "@vercel/sdk/models/usereventpayload464actortype.js";

let value: UserEventPayload512Scope = "project";
```

## Values

```typescript
"project" | "team" | "user"
```