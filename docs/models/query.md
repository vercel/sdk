# Query

## Example Usage

```typescript
import { Query } from "@vercel/sdk/models/aggregatepageviewsop.js";

let value: Query = {
  since: "<value>",
  until: "<value>",
  limit: 8289.2,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `since`            | *string*           | :heavy_check_mark: | N/A                |
| `until`            | *string*           | :heavy_check_mark: | N/A                |
| `groupBy`          | *models.GroupBy*[] | :heavy_minus_sign: | N/A                |
| `filter`           | *string*           | :heavy_minus_sign: | N/A                |
| `limit`            | *number*           | :heavy_check_mark: | N/A                |