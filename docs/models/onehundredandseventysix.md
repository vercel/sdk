# OneHundredAndSeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventySix } from "@vercel/sdk/models/bandwidth.js";

let value: OneHundredAndSeventySix = {
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
| `requestKind`                                                                        | [models.UserEventPayload176RequestKind](../models/usereventpayload176requestkind.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `key`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |