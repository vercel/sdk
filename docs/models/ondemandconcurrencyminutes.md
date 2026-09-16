# OnDemandConcurrencyMinutes

## Example Usage

```typescript
import { OnDemandConcurrencyMinutes } from "@vercel/sdk/models/onehundredandfortyeight.js";

let value: OnDemandConcurrencyMinutes = {
  currentThreshold: 2281.01,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `blockedAt`                 | *number*                    | :heavy_minus_sign:          | N/A                         |
| `blockGracePeriodStartedAt` | *number*                    | :heavy_minus_sign:          | N/A                         |
| `currentThreshold`          | *number*                    | :heavy_check_mark:          | N/A                         |
| `warningAt`                 | *number*                    | :heavy_minus_sign:          | N/A                         |