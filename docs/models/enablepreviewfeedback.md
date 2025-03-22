# EnablePreviewFeedback

Whether the Vercel Toolbar is enabled for preview deployments.

## Example Usage

```typescript
import { EnablePreviewFeedback } from "@vercel/sdk/models/userevent.js";

let value: EnablePreviewFeedback = "default-force";
```

## Values

```typescript
"default" | "on" | "off" | "on-force" | "off-force" | "default-force"
```