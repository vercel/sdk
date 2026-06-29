# AggregateEventsQuery

## Example Usage

```typescript
import { AggregateEventsQuery } from "@vercel/sdk/models/aggregateeventsop.js";

let value: AggregateEventsQuery = {
  since: "<value>",
  until: "<value>",
  limit: 3724.24,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `since`                           | *string*                          | :heavy_check_mark:                | N/A                               |
| `until`                           | *string*                          | :heavy_check_mark:                | N/A                               |
| `groupBy`                         | *models.AggregateEventsGroupBy*[] | :heavy_minus_sign:                | N/A                               |
| `filter`                          | *string*                          | :heavy_minus_sign:                | N/A                               |
| `limit`                           | *number*                          | :heavy_check_mark:                | N/A                               |