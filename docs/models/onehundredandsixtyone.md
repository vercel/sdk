# OneHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyOne } from "@vercel/sdk/models/payloaddismissals.js";

let value: OneHundredAndSixtyOne = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "list_keys",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `resourceId`                                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `integrationId`                                              | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `integrationSlug`                                            | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `integrationProductSlug`                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `configurationId`                                            | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `error`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `requestKind`                                                | [models.PayloadRequestKind](../models/payloadrequestkind.md) | :heavy_check_mark:                                           | N/A                                                          |
| `pattern`                                                    | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |