# GetAllLogDrainsDelivery1

## Example Usage

```typescript
import { GetAllLogDrainsDelivery1 } from "@vercel/sdk/models/getalllogdrainsop.js";

let value: GetAllLogDrainsDelivery1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "json",
  headers: {},
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | *"http"*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `endpoint`                                                                                                               | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `encoding`                                                                                                               | [models.GetAllLogDrainsDeliveryLogDrainsResponseEncoding](../models/getalllogdrainsdeliverylogdrainsresponseencoding.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `compression`                                                                                                            | [models.GetAllLogDrainsDeliveryCompression](../models/getalllogdrainsdeliverycompression.md)                             | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `headers`                                                                                                                | Record<string, *string*>                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `secret`                                                                                                                 | *models.GetAllLogDrainsDeliverySecret*                                                                                   | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |