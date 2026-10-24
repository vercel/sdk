# UserEventPayload500Scope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { UserEventPayload500Scope } from "@vercel/sdk/models/fourhundredandfifty.js";

let value: UserEventPayload500Scope = "team";
```

## Values

```typescript
"project" | "team" | "user"
```