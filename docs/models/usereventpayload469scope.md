# UserEventPayload469Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload469Scope } from "@vercel/sdk/models/fourhundredandsixteen.js";

let value: UserEventPayload469Scope = "project";
```

## Values

```typescript
"project" | "team" | "user"
```