# AggregateEventsQuery

## Example Usage

```typescript
import { AggregateEventsQuery } from "@vercel/sdk/models/aggregateeventsop.js";

let value: AggregateEventsQuery = {
  limit: 3724.24,
  since: "<value>",
  until: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `filter`                          | *string*                          | :heavy_minus_sign:                | N/A                               |
| `groupBy`                         | *models.AggregateEventsGroupBy*[] | :heavy_minus_sign:                | N/A                               |
| `limit`                           | *number*                          | :heavy_check_mark:                | N/A                               |
| `since`                           | *string*                          | :heavy_check_mark:                | N/A                               |
| `until`                           | *string*                          | :heavy_check_mark:                | N/A                               |