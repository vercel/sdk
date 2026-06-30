# SkipAutoDetectionConfirmation

Set to `1` to skip framework auto-detection and proceed without confirmation. By default, if Vercel detects a framework that differs from the project setting, the API returns a `400` asking you to confirm. Use this to suppress that check in automated pipelines.

## Example Usage

```typescript
import { SkipAutoDetectionConfirmation } from "@vercel/sdk/models/createdeploymentvaluedeployments2.js";

let value: SkipAutoDetectionConfirmation = "1";
```

## Values

```typescript
"0" | "1"
```