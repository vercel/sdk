# UpdateDrainDeliveryDrainsResponse2

## Example Usage

```typescript
import { UpdateDrainDeliveryDrainsResponse2 } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainDeliveryDrainsResponse2 = {
  encoding: "json",
  endpoint: {
    traces: "<value>",
  },
  headers: {
    "key": "<value>",
  },
  type: "otlphttp",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `encoding`                                                                                                                                                               | [models.UpdateDrainDeliveryDrainsResponse200ApplicationJSONResponseBody2Encoding](../models/updatedraindeliverydrainsresponse200applicationjsonresponsebody2encoding.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `endpoint`                                                                                                                                                               | [models.UpdateDrainDeliveryDrainsEndpoint](../models/updatedraindeliverydrainsendpoint.md)                                                                               | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `headers`                                                                                                                                                                | Record<string, *string*>                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `secret`                                                                                                                                                                 | *models.UpdateDrainDeliveryDrainsResponse200Secret*                                                                                                                      | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `type`                                                                                                                                                                   | *"otlphttp"*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |