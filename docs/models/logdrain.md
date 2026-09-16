# LogDrain

## Example Usage

```typescript
import { LogDrain } from "@vercel/sdk/models/getconfigurationproductsresponsebody.js";

let value: LogDrain = {
  status: "enabled",
  endpoint: "<value>",
  format: "json",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                         | [models.GetConfigurationProductsIntegrationsResponse200ApplicationJSONStatus](../models/getconfigurationproductsintegrationsresponse200applicationjsonstatus.md) | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `endpoint`                                                                                                                                                       | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `headers`                                                                                                                                                        | Record<string, *string*>                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |
| `format`                                                                                                                                                         | [models.GetConfigurationProductsFormat](../models/getconfigurationproductsformat.md)                                                                             | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |