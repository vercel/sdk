# GetAllLogDrainsDelivery1

## Example Usage

```typescript
import { GetAllLogDrainsDelivery1 } from "@vercel/sdk/models/getalllogdrainsop.js";

let value: GetAllLogDrainsDelivery1 = {
  encoding: "json",
  endpoint: "<value>",
  headers: {},
  type: "http",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `compression`                                                                                                            | [models.GetAllLogDrainsDeliveryCompression](../models/getalllogdrainsdeliverycompression.md)                             | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `encoding`                                                                                                               | [models.GetAllLogDrainsDeliveryLogDrainsResponseEncoding](../models/getalllogdrainsdeliverylogdrainsresponseencoding.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `endpoint`                                                                                                               | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `headers`                                                                                                                | Record<string, *string*>                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `secret`                                                                                                                 | *models.GetAllLogDrainsDeliverySecret*                                                                                   | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `type`                                                                                                                   | *"http"*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |