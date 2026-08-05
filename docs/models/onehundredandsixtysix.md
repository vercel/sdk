# OneHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtySix } from "@vercel/sdk/models/postgres2.js";

let value: OneHundredAndSixtySix = {
  resourceId: "<id>",
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationProductSlug: "<value>",
  configurationId: "<id>",
  requestKind: "get_key_data",
  key: "<key>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `resourceId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `integrationId`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `integrationSlug`                                                                    | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `integrationProductSlug`                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `configurationId`                                                                    | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `error`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `requestKind`                                                                        | [models.UserEventPayload166RequestKind](../models/usereventpayload166requestkind.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `key`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |