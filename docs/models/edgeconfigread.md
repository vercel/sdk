# EdgeConfigRead

## Example Usage

```typescript
import { EdgeConfigRead } from "@vercel/sdk/models/nextrule.js";

let value: EdgeConfigRead = {
  currentThreshold: 5018.68,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `blockedAt`                 | *number*                    | :heavy_minus_sign:          | N/A                         |
| `blockGracePeriodStartedAt` | *number*                    | :heavy_minus_sign:          | N/A                         |
| `currentThreshold`          | *number*                    | :heavy_check_mark:          | N/A                         |
| `warningAt`                 | *number*                    | :heavy_minus_sign:          | N/A                         |