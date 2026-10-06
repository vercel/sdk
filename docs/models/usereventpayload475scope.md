# UserEventPayload475Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload475Scope } from "@vercel/sdk/models/fourhundredandtwentytwo.js";

let value: UserEventPayload475Scope = "user";
```

## Values

```typescript
"project" | "team" | "user"
```