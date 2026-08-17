# ProviderTimeouts

Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials.

## Example Usage

```typescript
import { ProviderTimeouts } from "@vercel/sdk/models/aigatewayvirtualmodelconfig.js";

let value: ProviderTimeouts = {};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `byok`                   | Record<string, *number*> | :heavy_minus_sign:       | N/A                      |