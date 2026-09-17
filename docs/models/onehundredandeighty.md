# OneHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEighty } from "@vercel/sdk/models/usereventpayload171newownerfeatureblocksworkfloweventsblockreason.js";

let value: OneHundredAndEighty = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  requestKind: "list_keys",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `configurationId`                                            | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `errorCode`                                                  | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `integrationId`                                              | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `integrationProductSlug`                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `integrationSlug`                                            | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `resourceId`                                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pattern`                                                    | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `requestKind`                                                | [models.PayloadRequestKind](../models/payloadrequestkind.md) | :heavy_check_mark:                                           | N/A                                                          |
| `type`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |