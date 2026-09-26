# RuntimeCacheWrite

## Example Usage

```typescript
import { RuntimeCacheWrite } from "@vercel/sdk/models/lasteditedbyprincipal.js";

let value: RuntimeCacheWrite = {
  currentThreshold: 8347.02,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `blockedAt`                 | *number*                    | :heavy_minus_sign:          | N/A                         |
| `blockGracePeriodStartedAt` | *number*                    | :heavy_minus_sign:          | N/A                         |
| `currentThreshold`          | *number*                    | :heavy_check_mark:          | N/A                         |
| `warningAt`                 | *number*                    | :heavy_minus_sign:          | N/A                         |