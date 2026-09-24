# UserEventPayload466Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload466Scope } from "@vercel/sdk/models/fourhundredandthirteen.js";

let value: UserEventPayload466Scope = "project";
```

## Values

```typescript
"project" | "team" | "user"
```