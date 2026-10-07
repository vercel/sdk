# UserEventPayload476Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload476Scope } from "@vercel/sdk/models/fourhundredandtwentythree.js";

let value: UserEventPayload476Scope = "user";
```

## Values

```typescript
"project" | "team" | "user"
```