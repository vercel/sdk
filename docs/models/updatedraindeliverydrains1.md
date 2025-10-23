# UpdateDrainDeliveryDrains1

## Example Usage

```typescript
import { UpdateDrainDeliveryDrains1 } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainDeliveryDrains1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "json",
  headers: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [models.UpdateDrainDeliveryType](../models/updatedraindeliverytype.md)                                     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `endpoint`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `encoding`                                                                                                 | [models.UpdateDrainDeliveryDrainsResponseEncoding](../models/updatedraindeliverydrainsresponseencoding.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `compression`                                                                                              | [models.UpdateDrainDeliveryCompression](../models/updatedraindeliverycompression.md)                       | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `headers`                                                                                                  | Record<string, *string*>                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `secret`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |