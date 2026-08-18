# Settings

## Example Usage

```typescript
import { Settings } from "@vercel/sdk/models/userevent.js";

let value: Settings = {
  minimumBalance: "<value>",
  targetBalance: "<value>",
  maximumMonthlySpend: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `minimumBalance`      | *string*              | :heavy_check_mark:    | N/A                   |
| `targetBalance`       | *string*              | :heavy_check_mark:    | N/A                   |
| `maximumMonthlySpend` | *string*              | :heavy_check_mark:    | N/A                   |