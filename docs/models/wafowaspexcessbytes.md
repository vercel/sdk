# WafOwaspExcessBytes

## Example Usage

```typescript
import { WafOwaspExcessBytes } from "@vercel/sdk/models/nextrule.js";

let value: WafOwaspExcessBytes = {
  currentThreshold: 2693.47,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `blockedAt`                 | *number*                    | :heavy_minus_sign:          | N/A                         |
| `blockGracePeriodStartedAt` | *number*                    | :heavy_minus_sign:          | N/A                         |
| `currentThreshold`          | *number*                    | :heavy_check_mark:          | N/A                         |
| `warningAt`                 | *number*                    | :heavy_minus_sign:          | N/A                         |