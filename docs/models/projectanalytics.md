# ProjectAnalytics

## Example Usage

```typescript
import { ProjectAnalytics } from "@vercel/sdk/models/twohundredandsixteen.js";

let value: ProjectAnalytics = {
  disabledAt: 1667.24,
  enabledAt: 8757.5,
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