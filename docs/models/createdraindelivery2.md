# CreateDrainDelivery2

## Example Usage

```typescript
import { CreateDrainDelivery2 } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainDelivery2 = {
  encoding: "proto",
  endpoint: {
    traces: "<value>",
  },
  headers: {},
  type: "otlphttp",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `encoding`                                                                                                       | [models.CreateDrainDeliveryDrainsResponse200Encoding](../models/createdraindeliverydrainsresponse200encoding.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `endpoint`                                                                                                       | [models.CreateDrainDeliveryDrainsEndpoint](../models/createdraindeliverydrainsendpoint.md)                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `headers`                                                                                                        | Record<string, *string*>                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `secret`                                                                                                         | *models.DeliverySecret*                                                                                          | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | *"otlphttp"*                                                                                                     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |