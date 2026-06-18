# GetDrainDeliveryDrains1

## Example Usage

```typescript
import { GetDrainDeliveryDrains1 } from "@vercel/sdk/models/getdrainop.js";

let value: GetDrainDeliveryDrains1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "ndjson",
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | *"http"*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `endpoint`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `encoding`                                                                                                 | [models.GetDrainDeliveryDrainsResponse200Encoding](../models/getdraindeliverydrainsresponse200encoding.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `compression`                                                                                              | [models.GetDrainDeliveryDrainsResponseCompression](../models/getdraindeliverydrainsresponsecompression.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `headers`                                                                                                  | Record<string, *string*>                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `secret`                                                                                                   | *models.GetDrainDeliveryDrainsResponseSecret*                                                              | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |