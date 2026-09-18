# OneHundredAndSeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyNine } from "@vercel/sdk/models/usereventpayload172newownerfeatureblocksvcrblockreason.js";

let value: OneHundredAndSeventyNine = {
  configurationId: "<id>",
  databaseName: "<value>",
  errorCode: "<value>",
  failedQueryIndex: 5975.39,
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  queries: [
    {
      command: "<value>",
    },
  ],
  queryCount: 4786.86,
  queryType: "user",
  readonly: true,
  resourceId: "<id>",
  rolledBack: true,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `configurationId`                          | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `databaseName`                             | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `errorCode`                                | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `failedQueryIndex`                         | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `integrationId`                            | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `integrationProductSlug`                   | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `integrationSlug`                          | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `queries`                                  | [models.Queries](../models/queries.md)[]   | :heavy_check_mark:                         | N/A                                        |
| `queryCount`                               | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `queryType`                                | [models.QueryType](../models/querytype.md) | :heavy_check_mark:                         | N/A                                        |
| `readonly`                                 | *boolean*                                  | :heavy_check_mark:                         | N/A                                        |
| `resourceId`                               | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `rolledBack`                               | *boolean*                                  | :heavy_check_mark:                         | N/A                                        |