# Proxy

## Example Usage

```typescript
import { Proxy } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: Proxy = {
  timestamp: 5231.31,
  method: "<value>",
  host: "elliptical-integer.org",
  path: "/var/mail",
  userAgent: [
    "<value>",
  ],
  referer: "hidden-longboat.name",
  region: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `timestamp`                                    | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `method`                                       | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `host`                                         | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `path`                                         | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `statusCode`                                   | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `userAgent`                                    | *string*[]                                     | :heavy_check_mark:                             | N/A                                            |
| `referer`                                      | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `clientIp`                                     | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `region`                                       | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `scheme`                                       | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `responseByteSize`                             | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `cacheId`                                      | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `pathType`                                     | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `pathTypeVariant`                              | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `vercelId`                                     | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `vercelCache`                                  | [models.VercelCache](../models/vercelcache.md) | :heavy_minus_sign:                             | N/A                                            |
| `lambdaRegion`                                 | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `wafAction`                                    | [models.WafAction](../models/wafaction.md)     | :heavy_minus_sign:                             | N/A                                            |
| `wafRuleId`                                    | *string*                                       | :heavy_minus_sign:                             | N/A                                            |