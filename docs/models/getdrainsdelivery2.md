# GetDrainsDelivery2

## Example Usage

```typescript
import { GetDrainsDelivery2 } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsDelivery2 = {
  encoding: "proto",
  endpoint: {
    traces: "<value>",
  },
  headers: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  type: "otlphttp",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `encoding`                                                                             | [models.GetDrainsDeliveryDrainsEncoding](../models/getdrainsdeliverydrainsencoding.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `endpoint`                                                                             | [models.GetDrainsDeliveryEndpoint](../models/getdrainsdeliveryendpoint.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `headers`                                                                              | Record<string, *string*>                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `secret`                                                                               | *models.GetDrainsDeliveryDrainsSecret*                                                 | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *"otlphttp"*                                                                           | :heavy_check_mark:                                                                     | N/A                                                                                    |