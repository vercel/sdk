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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | *"http"*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `endpoint`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `encoding`                                                                                                 | [models.CreateDrainDeliveryDrainsResponseEncoding](../models/createdraindeliverydrainsresponseencoding.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `compression`                                                                                              | [models.CreateDrainDeliveryCompression](../models/createdraindeliverycompression.md)                       | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `headers`                                                                                                  | Record<string, *string*>                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `secret`                                                                                                   | *models.Secret*                                                                                            | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |