# CreateDrainDeliveryDrains1

## Example Usage

```typescript
import { CreateDrainDeliveryDrains1 } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainDeliveryDrains1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "ndjson",
  headers: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [models.CreateDrainDeliveryDrainsResponse200Type](../models/createdraindeliverydrainsresponse200type.md)         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `endpoint`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `encoding`                                                                                                       | [models.CreateDrainDeliveryDrainsResponse200Encoding](../models/createdraindeliverydrainsresponse200encoding.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `compression`                                                                                                    | [models.CreateDrainDeliveryCompression](../models/createdraindeliverycompression.md)                             | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `headers`                                                                                                        | Record<string, *string*>                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `secret`                                                                                                         | *models.CreateDrainDeliverySecret*                                                                               | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |