# GetAllLogDrainsDeliveryLogDrains2

## Example Usage

```typescript
import { GetAllLogDrainsDeliveryLogDrains2 } from "@vercel/sdk/models/getalllogdrainsop.js";

let value: GetAllLogDrainsDeliveryLogDrains2 = {
  encoding: "json",
  endpoint: {
    traces: "<value>",
  },
  headers: {
    "key": "<value>",
  },
  type: "otlphttp",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `encoding`                                                                             | [models.GetAllLogDrainsDeliveryEncoding](../models/getalllogdrainsdeliveryencoding.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `endpoint`                                                                             | [models.GetAllLogDrainsDeliveryEndpoint](../models/getalllogdrainsdeliveryendpoint.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `headers`                                                                              | Record<string, *string*>                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `secret`                                                                               | *models.GetAllLogDrainsDeliveryLogDrainsResponse200Secret*                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *"otlphttp"*                                                                           | :heavy_check_mark:                                                                     | N/A                                                                                    |