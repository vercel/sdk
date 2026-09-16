# CreateDrainDeliveryDrains2

## Example Usage

```typescript
import { CreateDrainDeliveryDrains2 } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainDeliveryDrains2 = {
  encoding: "json",
  endpoint: {
    traces: "<value>",
  },
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
  type: "otlphttp",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `encoding`                                                                                                                                                               | [models.CreateDrainDeliveryDrainsResponse200ApplicationJSONResponseBody2Encoding](../models/createdraindeliverydrainsresponse200applicationjsonresponsebody2encoding.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `endpoint`                                                                                                                                                               | [models.CreateDrainDeliveryDrainsResponseEndpoint](../models/createdraindeliverydrainsresponseendpoint.md)                                                               | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `headers`                                                                                                                                                                | Record<string, *string*>                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `secret`                                                                                                                                                                 | *models.CreateDrainDeliveryDrainsSecret*                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `type`                                                                                                                                                                   | *"otlphttp"*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |