# OneHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyThree } from "@vercel/sdk/models/usereventpayload146role.js";

let value: OneHundredAndFiftyThree = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  databaseName: "<value>",
  queryType: "data-view",
  readonly: false,
  rolledBack: true,
  failedQueryIndex: 5249.18,
  errorCode: "<value>",
  queryCount: 7438.21,
  queries: [
    {
      command: "<value>",
    },
  ],
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