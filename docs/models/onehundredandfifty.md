# OneHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFifty } from "@vercel/sdk/models/usereventpayloadgituserid.js";

let value: OneHundredAndFifty = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  databaseName: "<value>",
  queryType: "data-view",
  readonly: true,
  rolledBack: false,
  failedQueryIndex: 3204.13,
  errorCode: "<value>",
  queryCount: 8186.25,
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