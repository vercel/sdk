# GetAllLogDrainsDeliveryLogDrains2

## Example Usage

```typescript
import { GetAllLogDrainsDeliveryLogDrains2 } from "@vercel/sdk/models/getalllogdrainsop.js";

let value: GetAllLogDrainsDeliveryLogDrains2 = {
  type: "otlphttp",
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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [models.GetAllLogDrainsDeliveryType](../models/getalllogdrainsdeliverytype.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `endpoint`                                                                             | [models.GetAllLogDrainsDeliveryEndpoint](../models/getalllogdrainsdeliveryendpoint.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `encoding`                                                                             | [models.GetAllLogDrainsDeliveryEncoding](../models/getalllogdrainsdeliveryencoding.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `headers`                                                                              | Record<string, *string*>                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `secret`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |