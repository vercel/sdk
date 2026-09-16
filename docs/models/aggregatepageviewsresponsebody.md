# AggregatePageviewsResponseBody

## Example Usage

```typescript
import { AggregatePageviewsResponseBody } from "@vercel/sdk/models/aggregatepageviewsop.js";

let value: AggregatePageviewsResponseBody = {
  data: [],
  query: {
    limit: 717.95,
    since: "<value>",
    until: "<value>",
  },
  version: 2026.63,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `data`                             | *models.AggregatePageviewsData*    | :heavy_check_mark:                 | N/A                                |
| `query`                            | [models.Query](../models/query.md) | :heavy_check_mark:                 | N/A                                |
| `version`                          | *number*                           | :heavy_check_mark:                 | N/A                                |