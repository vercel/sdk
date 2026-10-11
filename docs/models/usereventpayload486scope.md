# UserEventPayload486Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload486Scope } from "@vercel/sdk/models/fourhundredandthirtyfour.js";

let value: UserEventPayload486Scope = "project";
```

## Values

```typescript
"project" | "team" | "user"
```