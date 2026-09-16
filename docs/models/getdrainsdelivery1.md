# GetDrainsDelivery1

## Example Usage

```typescript
import { GetDrainsDelivery1 } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsDelivery1 = {
  encoding: "json",
  endpoint: "<value>",
  headers: {
    "key": "<value>",
  },
  type: "http",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `compression`                                                                    | [models.GetDrainsDeliveryCompression](../models/getdrainsdeliverycompression.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `encoding`                                                                       | [models.GetDrainsDeliveryEncoding](../models/getdrainsdeliveryencoding.md)       | :heavy_check_mark:                                                               | N/A                                                                              |
| `endpoint`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `headers`                                                                        | Record<string, *string*>                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `secret`                                                                         | *models.GetDrainsDeliverySecret*                                                 | :heavy_minus_sign:                                                               | N/A                                                                              |
| `type`                                                                           | *"http"*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |