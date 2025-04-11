# PrevProjectAnalytics

## Example Usage

```typescript
import { PrevProjectAnalytics } from "@vercel/sdk/models/userevent.js";

let value: PrevProjectAnalytics = {
  id: "<id>",
  disabledAt: 1591.57,
  enabledAt: 6684.29,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `id`                  | *string*              | :heavy_check_mark:    | N/A                   |
| `canceledAt`          | *number*              | :heavy_minus_sign:    | N/A                   |
| `disabledAt`          | *number*              | :heavy_check_mark:    | N/A                   |
| `enabledAt`           | *number*              | :heavy_check_mark:    | N/A                   |
| `paidAt`              | *number*              | :heavy_minus_sign:    | N/A                   |
| `sampleRatePercent`   | *number*              | :heavy_minus_sign:    | N/A                   |
| `spendLimitInDollars` | *number*              | :heavy_minus_sign:    | N/A                   |