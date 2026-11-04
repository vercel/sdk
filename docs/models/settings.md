# Settings

## Example Usage

```typescript
import { Settings } from "@vercel/sdk/models/userevent.js";

let value: Settings = {
  maximumMonthlySpend: "<value>",
  minimumBalance: "<value>",
  targetBalance: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `maximumMonthlySpend` | *string*              | :heavy_check_mark:    | N/A                   |
| `minimumBalance`      | *string*              | :heavy_check_mark:    | N/A                   |
| `targetBalance`       | *string*              | :heavy_check_mark:    | N/A                   |