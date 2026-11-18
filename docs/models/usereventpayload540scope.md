# UserEventPayload540Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload540Scope } from "@vercel/sdk/models/usereventpayload499next.js";

let value: UserEventPayload540Scope = "user";
```

## Values

```typescript
"project" | "team" | "user"
```