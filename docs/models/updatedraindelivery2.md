# UpdateDrainDelivery2

## Example Usage

```typescript
import { UpdateDrainDelivery2 } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainDelivery2 = {
  type: "<value>",
  endpoint: {
    traces: "<value>",
  },
  encoding: "json",
  headers: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `endpoint`                                                                                 | *models.DeliveryEndpoint*                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `encoding`                                                                                 | [models.UpdateDrainDeliveryDrainsEncoding](../models/updatedraindeliverydrainsencoding.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `headers`                                                                                  | Record<string, *string*>                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `secret`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |