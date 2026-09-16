# UpdateDrainDeliveryDrains1

## Example Usage

```typescript
import { UpdateDrainDeliveryDrains1 } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainDeliveryDrains1 = {
  encoding: "json",
  endpoint: "<value>",
  headers: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  type: "http",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `compression`                                                                                                    | [models.UpdateDrainDeliveryDrainsResponseCompression](../models/updatedraindeliverydrainsresponsecompression.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `encoding`                                                                                                       | [models.UpdateDrainDeliveryDrainsResponseEncoding](../models/updatedraindeliverydrainsresponseencoding.md)       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `endpoint`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `headers`                                                                                                        | Record<string, *string*>                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `secret`                                                                                                         | *models.UpdateDrainDeliverySecret*                                                                               | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | *"http"*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |