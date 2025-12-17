# Redirect

The redirect object to edit. The source field is used to match the redirect to modify.

## Example Usage

```typescript
import { Redirect } from "@vercel/sdk/models/patchv1bulkredirectsop.js";

let value: Redirect = {
  source: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `source`           | *string*           | :heavy_check_mark: | N/A                |
| `destination`      | *string*           | :heavy_minus_sign: | N/A                |
| `statusCode`       | *number*           | :heavy_minus_sign: | N/A                |
| `permanent`        | *boolean*          | :heavy_minus_sign: | N/A                |
| `caseSensitive`    | *boolean*          | :heavy_minus_sign: | N/A                |
| `query`            | *boolean*          | :heavy_minus_sign: | N/A                |