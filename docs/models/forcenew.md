# ForceNew

Forces a new deployment even if there is a previous similar deployment. Set to `1` to bypass deployment deduplication and always trigger a fresh build.

## Example Usage

```typescript
import { ForceNew } from "@vercel/sdk/models/createdeploymentvaluedeployments2.js";

let value: ForceNew = "1";
```

## Values

```typescript
"0" | "1"
```