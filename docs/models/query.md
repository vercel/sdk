# Query

## Example Usage

```typescript
import { Query } from "@vercel/sdk/models/aggregatepageviewsop.js";

let value: Query = {
  limit: 8289.2,
  since: "<value>",
  until: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `filter`           | *string*           | :heavy_minus_sign: | N/A                |
| `groupBy`          | *models.GroupBy*[] | :heavy_minus_sign: | N/A                |
| `limit`            | *number*           | :heavy_check_mark: | N/A                |
| `since`            | *string*           | :heavy_check_mark: | N/A                |
| `until`            | *string*           | :heavy_check_mark: | N/A                |