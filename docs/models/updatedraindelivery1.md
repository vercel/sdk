# UpdateDrainDelivery1

## Example Usage

```typescript
import { UpdateDrainDelivery1 } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainDelivery1 = {
  type: "<value>",
  endpoint: "<value>",
  encoding: "json",
  headers: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `endpoint`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `compression`                                                                  | [models.DeliveryCompression](../models/deliverycompression.md)                 | :heavy_minus_sign:                                                             | N/A                                                                            |
| `encoding`                                                                     | [models.UpdateDrainDeliveryEncoding](../models/updatedraindeliveryencoding.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `headers`                                                                      | Record<string, *string*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `secret`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |