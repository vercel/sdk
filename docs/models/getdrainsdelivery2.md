# GetDrainsDelivery2

## Example Usage

```typescript
import { GetDrainsDelivery2 } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsDelivery2 = {
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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [models.GetDrainsDeliveryDrainsType](../models/getdrainsdeliverydrainstype.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `endpoint`                                                                             | [models.GetDrainsDeliveryEndpoint](../models/getdrainsdeliveryendpoint.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `encoding`                                                                             | [models.GetDrainsDeliveryDrainsEncoding](../models/getdrainsdeliverydrainsencoding.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `headers`                                                                              | Record<string, *string*>                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `secret`                                                                               | *models.GetDrainsDeliveryDrainsSecret*                                                 | :heavy_minus_sign:                                                                     | N/A                                                                                    |