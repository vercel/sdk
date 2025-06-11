# EnableProductionFeedback

Whether toolbar is enabled on production deployments

## Example Usage

```typescript
import { EnableProductionFeedback } from "@vercel/sdk/models/team.js";

let value: EnableProductionFeedback = "off-force";
```

## Values

```typescript
"default" | "on" | "off" | "on-force" | "off-force" | "default-force"
```