# PayloadEnablePreviewFeedback

Whether the Vercel Toolbar is enabled for preview deployments.

## Example Usage

```typescript
import { PayloadEnablePreviewFeedback } from "@vercel/sdk/models/userevent.js";

let value: PayloadEnablePreviewFeedback = "off-force";
```

## Values

```typescript
"default" | "on" | "off" | "on-force" | "off-force" | "default-force"
```