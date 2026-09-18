# OneHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyTwo } from "@vercel/sdk/models/usereventpayload172newownerfeatureblocksvcrblockreason.js";

let value: OneHundredAndEightyTwo = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  keys: [
    "<value 1>",
  ],
  requestKind: "get_keys_metadata",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `configurationId`                                                              | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `errorCode`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `integrationId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `integrationProductSlug`                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `integrationSlug`                                                              | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `resourceId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `keys`                                                                         | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `requestKind`                                                                  | [models.UserEventPayloadRequestKind](../models/usereventpayloadrequestkind.md) | :heavy_check_mark:                                                             | N/A                                                                            |