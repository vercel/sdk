# ResponseBodyAnalytics

## Example Usage

```typescript
import { ResponseBodyAnalytics } from "@vercel/sdk/models/erl.js";

let value: ResponseBodyAnalytics = {
  disabledAt: 8236.05,
  enabledAt: 4671.8,
  id: "<id>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `canceledAt`          | *number*              | :heavy_minus_sign:    | N/A                   |
| `disabledAt`          | *number*              | :heavy_check_mark:    | N/A                   |
| `enabledAt`           | *number*              | :heavy_check_mark:    | N/A                   |
| `id`                  | *string*              | :heavy_check_mark:    | N/A                   |
| `paidAt`              | *number*              | :heavy_minus_sign:    | N/A                   |
| `sampleRatePercent`   | *number*              | :heavy_minus_sign:    | N/A                   |
| `spendLimitInDollars` | *number*              | :heavy_minus_sign:    | N/A                   |