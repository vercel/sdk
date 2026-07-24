# OneHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyTwo } from "@vercel/sdk/models/payloaddismissals.js";

let value: OneHundredAndSixtyTwo = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "get_keys_metadata",
  keys: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `resourceId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `integrationId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `integrationSlug`                                                              | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `integrationProductSlug`                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `configurationId`                                                              | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `error`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `requestKind`                                                                  | [models.UserEventPayloadRequestKind](../models/usereventpayloadrequestkind.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `keys`                                                                         | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |