# ThreeProxy

## Example Usage

```typescript
import { ThreeProxy } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: ThreeProxy = {
  host: "firm-kinase.info",
  method: "<value>",
  timestamp: 5458.28,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `cacheId`                                                | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `clientIp`                                               | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `host`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `lambdaRegion`                                           | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `method`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `path`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `pathType`                                               | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `pathTypeVariant`                                        | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `referer`                                                | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `region`                                                 | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `responseByteSize`                                       | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `scheme`                                                 | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `statusCode`                                             | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `timestamp`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `userAgent`                                              | *string*[]                                               | :heavy_minus_sign:                                       | N/A                                                      |
| `vercelCache`                                            | [models.ThreeVercelCache](../models/threevercelcache.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `vercelId`                                               | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `wafAction`                                              | [models.ThreeWafAction](../models/threewafaction.md)     | :heavy_minus_sign:                                       | N/A                                                      |
| `wafRuleId`                                              | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |