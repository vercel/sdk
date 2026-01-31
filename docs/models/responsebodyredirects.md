# ResponseBodyRedirects

## Example Usage

```typescript
import { ResponseBodyRedirects } from "@vercel/sdk/models/getredirectsop.js";

let value: ResponseBodyRedirects = {
  source: "<value>",
  destination: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `statusCode`          | *number*              | :heavy_minus_sign:    | N/A                   |
| `permanent`           | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `sensitive`           | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `caseSensitive`       | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `query`               | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `preserveQueryParams` | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `source`              | *string*              | :heavy_check_mark:    | N/A                   |
| `destination`         | *string*              | :heavy_check_mark:    | N/A                   |