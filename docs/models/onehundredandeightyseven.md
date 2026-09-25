# OneHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightySeven } from "@vercel/sdk/models/sourceimages.js";

let value: OneHundredAndEightySeven = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationProductSlug: "<value>",
  integrationSlug: "<value>",
  resourceId: "<id>",
  keys: [],
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