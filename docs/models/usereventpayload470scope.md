# UserEventPayload470Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload470Scope } from "@vercel/sdk/models/fourhundredandseventeen.js";

let value: UserEventPayload470Scope = "team";
```

## Values

```typescript
"project" | "team" | "user"
```