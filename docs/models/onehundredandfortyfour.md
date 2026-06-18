# OneHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyFour } from "@vercel/sdk/models/analyticsusage.js";

let value: OneHundredAndFortyFour = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  databaseName: "<value>",
  queryType: "data-edit",
  readonly: true,
  rolledBack: true,
  failedQueryIndex: 297.98,
  errorCode: "<value>",
  queryCount: 6116.93,
  queries: [],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `resourceId`                               | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `integrationId`                            | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `integrationSlug`                          | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `integrationProductSlug`                   | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `configurationId`                          | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `databaseName`                             | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `queryType`                                | [models.QueryType](../models/querytype.md) | :heavy_check_mark:                         | N/A                                        |
| `readonly`                                 | *boolean*                                  | :heavy_check_mark:                         | N/A                                        |
| `rolledBack`                               | *boolean*                                  | :heavy_check_mark:                         | N/A                                        |
| `failedQueryIndex`                         | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `errorCode`                                | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `queryCount`                               | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `queries`                                  | [models.Queries](../models/queries.md)[]   | :heavy_check_mark:                         | N/A                                        |