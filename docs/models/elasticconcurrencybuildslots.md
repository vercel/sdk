# ElasticConcurrencyBuildSlots

## Example Usage

```typescript
import { ElasticConcurrencyBuildSlots } from "@vercel/sdk/models/nextrule.js";

let value: ElasticConcurrencyBuildSlots = {
  currentThreshold: 3569.2,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `blockedAt`                 | *number*                    | :heavy_minus_sign:          | N/A                         |
| `blockGracePeriodStartedAt` | *number*                    | :heavy_minus_sign:          | N/A                         |
| `currentThreshold`          | *number*                    | :heavy_check_mark:          | N/A                         |
| `warningAt`                 | *number*                    | :heavy_minus_sign:          | N/A                         |