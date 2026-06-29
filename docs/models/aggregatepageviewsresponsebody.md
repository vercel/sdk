# AggregatePageviewsResponseBody

## Example Usage

```typescript
import { AggregatePageviewsResponseBody } from "@vercel/sdk/models/aggregatepageviewsop.js";

let value: AggregatePageviewsResponseBody = {
  version: 4155.07,
  query: {
    since: "<value>",
    until: "<value>",
    limit: 2400.05,
  },
  data: [],
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `version`                          | *number*                           | :heavy_check_mark:                 | N/A                                |
| `query`                            | [models.Query](../models/query.md) | :heavy_check_mark:                 | N/A                                |
| `data`                             | *models.AggregatePageviewsData*    | :heavy_check_mark:                 | N/A                                |