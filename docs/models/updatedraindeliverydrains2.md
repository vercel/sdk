# UpdateDrainDeliveryDrains2

## Example Usage

```typescript
import { UpdateDrainDeliveryDrains2 } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainDeliveryDrains2 = {
  type: "otlphttp",
  endpoint: {
    traces: "<value>",
  },
  encoding: "proto",
  headers: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [models.UpdateDrainDeliveryDrainsType](../models/updatedraindeliverydrainstype.md)                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `endpoint`                                                                                                       | [models.UpdateDrainDeliveryEndpoint](../models/updatedraindeliveryendpoint.md)                                   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `encoding`                                                                                                       | [models.UpdateDrainDeliveryDrainsResponse200Encoding](../models/updatedraindeliverydrainsresponse200encoding.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `headers`                                                                                                        | Record<string, *string*>                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `secret`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |