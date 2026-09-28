# CountPageviewsResponseBody

## Example Usage

```typescript
import { CountPageviewsResponseBody } from "@vercel/sdk/models/countpageviewsop.js";

let value: CountPageviewsResponseBody = {
  data: {
    browserName: "<value>",
    country: "France",
    deviceType: "<value>",
    environment: "<value>",
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
  query: {
    since: "<value>",
    until: "<value>",
  },
  version: 2507.96,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `data`                                                         | *models.CountPageviewsData*                                    | :heavy_check_mark:                                             | N/A                                                            |
| `query`                                                        | [models.CountPageviewsQuery](../models/countpageviewsquery.md) | :heavy_check_mark:                                             | N/A                                                            |
| `version`                                                      | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |