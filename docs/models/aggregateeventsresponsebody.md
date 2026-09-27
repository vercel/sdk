# AggregateEventsResponseBody

## Example Usage

```typescript
import { AggregateEventsResponseBody } from "@vercel/sdk/models/aggregateeventsop.js";

let value: AggregateEventsResponseBody = {
  data: [
    {
      browserName: "<value>",
      country: "Svalbard & Jan Mayen Islands",
      deviceType: "<value>",
      environment: "<value>",
      eventData: "<value>",
      eventName: "<value>",
      flags: "<value>",
      osName: "<value>",
      projectId: "<id>",
      projectName: "<value>",
      referrerHostname: "<value>",
      requestHostname: "<value>",
      requestPath: "<value>",
      route: "<value>",
      utmCampaign: "<value>",
      utmContent: "<value>",
      utmMedium: "<value>",
      utmSource: "<value>",
      utmTerm: "<value>",
      visitorId: "<id>",
    },
  ],
  query: {
    limit: 6706.89,
    since: "<value>",
    until: "<value>",
  },
  version: 4609.96,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | *models.AggregateEventsData*                                     | :heavy_check_mark:                                               | N/A                                                              |
| `query`                                                          | [models.AggregateEventsQuery](../models/aggregateeventsquery.md) | :heavy_check_mark:                                               | N/A                                                              |
| `version`                                                        | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |