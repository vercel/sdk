# TwoHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndOne } from "@vercel/sdk/models/onehundredandeightyseven.js";

let value: TwoHundredAndOne = {
  configurationId: "<id>",
  databaseName: "<value>",
  errorCode: null,
  failedQueryIndex: 227.09,
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  queries: [],
  queryCount: 9964.01,
  queryType: "user",
  readonly: false,
  resourceId: "<id>",
  rolledBack: false,
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