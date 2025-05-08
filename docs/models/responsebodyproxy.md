# ResponseBodyProxy

## Example Usage

```typescript
import { ResponseBodyProxy } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: ResponseBodyProxy = {
  timestamp: 426.4,
  method: "<value>",
  host: "boiling-switchboard.info",
  path: "/var/spool",
  userAgent: [
    "<value>",
  ],
  referer: "aware-saw.info",
  region: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `timestamp`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `method`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `host`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `path`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `statusCode`                                                           | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `userAgent`                                                            | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `referer`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `clientIp`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `region`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `scheme`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `responseByteSize`                                                     | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `cacheId`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `pathType`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `pathTypeVariant`                                                      | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `vercelId`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `vercelCache`                                                          | [models.ResponseBodyVercelCache](../models/responsebodyvercelcache.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `lambdaRegion`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `wafAction`                                                            | [models.ResponseBodyWafAction](../models/responsebodywafaction.md)     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `wafRuleId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |