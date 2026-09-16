# GetDrainDelivery1

## Example Usage

```typescript
import { GetDrainDelivery1 } from "@vercel/sdk/models/getdrainop.js";

let value: GetDrainDelivery1 = {
  encoding: "ndjson",
  endpoint: "<value>",
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
  type: "http",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `compression`                                                                  | [models.GetDrainDeliveryCompression](../models/getdraindeliverycompression.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `encoding`                                                                     | [models.GetDrainDeliveryEncoding](../models/getdraindeliveryencoding.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `endpoint`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `headers`                                                                      | Record<string, *string*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `secret`                                                                       | *models.GetDrainDeliverySecret*                                                | :heavy_minus_sign:                                                             | N/A                                                                            |
| `type`                                                                         | *"http"*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |