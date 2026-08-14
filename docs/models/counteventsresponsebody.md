# CountEventsResponseBody

## Example Usage

```typescript
import { CountEventsResponseBody } from "@vercel/sdk/models/counteventsop.js";

let value: CountEventsResponseBody = {
  version: 8603.94,
  query: {
    since: "<value>",
    until: "<value>",
  },
  data: {
    visitors: 6439.69,
    count: 5547.66,
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `version`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `query`                                                  | [models.CountEventsQuery](../models/counteventsquery.md) | :heavy_check_mark:                                       | N/A                                                      |
| `data`                                                   | *models.CountEventsData*                                 | :heavy_check_mark:                                       | N/A                                                      |