# GetDrainsDelivery1

## Example Usage

```typescript
import { GetDrainsDelivery1 } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsDelivery1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "json",
  headers: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | [models.GetDrainsDeliveryType](../models/getdrainsdeliverytype.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `endpoint`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `encoding`                                                                       | [models.GetDrainsDeliveryEncoding](../models/getdrainsdeliveryencoding.md)       | :heavy_check_mark:                                                               | N/A                                                                              |
| `compression`                                                                    | [models.GetDrainsDeliveryCompression](../models/getdrainsdeliverycompression.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `headers`                                                                        | Record<string, *string*>                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `secret`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |