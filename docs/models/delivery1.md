# Delivery1

## Example Usage

```typescript
import { Delivery1 } from "@vercel/sdk/models/createdrainop.js";

let value: Delivery1 = {
  type: "<value>",
  endpoint: "<value>",
  encoding: "json",
  headers: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `endpoint`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `compression`                                            | [models.Compression](../models/compression.md)           | :heavy_minus_sign:                                       | N/A                                                      |
| `encoding`                                               | [models.DeliveryEncoding](../models/deliveryencoding.md) | :heavy_check_mark:                                       | N/A                                                      |
| `headers`                                                | Record<string, *string*>                                 | :heavy_check_mark:                                       | N/A                                                      |
| `secret`                                                 | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |