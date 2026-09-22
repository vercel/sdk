# GetProjectAnalytics

## Example Usage

```typescript
import { GetProjectAnalytics } from "@vercel/sdk/models/getprojectintegrations.js";

let value: GetProjectAnalytics = {
  disabledAt: 9863.15,
  enabledAt: 8317.83,
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