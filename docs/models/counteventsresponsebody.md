# CountEventsResponseBody

## Example Usage

```typescript
import { CountEventsResponseBody } from "@vercel/sdk/models/counteventsop.js";

let value: CountEventsResponseBody = {
  data: {
    count: 7146.18,
    visitors: 6439.69,
  },
  query: {
    since: "<value>",
    until: "<value>",
  },
  version: 5547.66,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `data`                                                   | *models.CountEventsData*                                 | :heavy_check_mark:                                       | N/A                                                      |
| `query`                                                  | [models.CountEventsQuery](../models/counteventsquery.md) | :heavy_check_mark:                                       | N/A                                                      |
| `version`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |