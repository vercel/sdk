# PayloadScope

Which repository visibilities get automatic reviews

## Example Usage

```typescript
import { PayloadScope } from "@vercel/sdk/models/userevent.js";

let value: PayloadScope = "selected_repos";
```

## Values

```typescript
"public" | "all" | "private" | "selected_repos"
```