# PayloadScope

Scope of the token: - `'user'`: full-account token (not tied to any team). - `'team'`: scoped to a single team. - `'project'`: scoped to a single project within a team.

## Example Usage

```typescript
import { PayloadScope } from "@vercel/sdk/models/twohundredandseventyfour.js";

let value: PayloadScope = "project";
```

## Values

```typescript
"user" | "team" | "project"
```