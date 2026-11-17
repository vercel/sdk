# UserEventPayload531Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload531Scope } from "@vercel/sdk/models/usereventpayload491previous.js";

let value: UserEventPayload531Scope = "team";
```

## Values

```typescript
"project" | "team" | "user"
```