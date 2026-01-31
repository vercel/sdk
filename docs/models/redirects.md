# Redirects

## Example Usage

```typescript
import { Redirects } from "@vercel/sdk/models/stageredirectsop.js";

let value: Redirects = {
  source: "<value>",
  destination: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `source`              | *string*              | :heavy_check_mark:    | N/A                   |
| `destination`         | *string*              | :heavy_check_mark:    | N/A                   |
| `statusCode`          | *models.StatusCode*   | :heavy_minus_sign:    | N/A                   |
| `permanent`           | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `caseSensitive`       | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `query`               | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `preserveQueryParams` | *boolean*             | :heavy_minus_sign:    | N/A                   |