# GetDrainDelivery1

## Example Usage

```typescript
import { GetDrainDelivery1 } from "@vercel/sdk/models/getdrainop.js";

let value: GetDrainDelivery1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "ndjson",
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [models.GetDrainDeliveryType](../models/getdraindeliverytype.md)               | :heavy_check_mark:                                                             | N/A                                                                            |
| `endpoint`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `encoding`                                                                     | [models.GetDrainDeliveryEncoding](../models/getdraindeliveryencoding.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `compression`                                                                  | [models.GetDrainDeliveryCompression](../models/getdraindeliverycompression.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `headers`                                                                      | Record<string, *string*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `secret`                                                                       | *models.GetDrainDeliverySecret*                                                | :heavy_minus_sign:                                                             | N/A                                                                            |