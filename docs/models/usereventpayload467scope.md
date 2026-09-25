# UserEventPayload467Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload467Scope } from "@vercel/sdk/models/fourhundredandfourteen.js";

let value: UserEventPayload467Scope = "user";
```

## Values

```typescript
"project" | "team" | "user"
```