# CreateDrainDelivery1

## Example Usage

```typescript
import { CreateDrainDelivery1 } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainDelivery1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "ndjson",
  headers: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | [models.DeliveryType](../models/deliverytype.md)                                                 | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `endpoint`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `encoding`                                                                                       | [models.CreateDrainDeliveryDrainsEncoding](../models/createdraindeliverydrainsencoding.md)       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `compression`                                                                                    | [models.CreateDrainDeliveryDrainsCompression](../models/createdraindeliverydrainscompression.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `headers`                                                                                        | Record<string, *string*>                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `secret`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |