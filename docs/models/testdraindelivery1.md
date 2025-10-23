# TestDrainDelivery1

## Example Usage

```typescript
import { TestDrainDelivery1 } from "@vercel/sdk/models/testdrainop.js";

let value: TestDrainDelivery1 = {
  type: "<value>",
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
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `endpoint`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `compression`                                                                    | [models.TestDrainDeliveryCompression](../models/testdraindeliverycompression.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `encoding`                                                                       | [models.TestDrainDeliveryEncoding](../models/testdraindeliveryencoding.md)       | :heavy_check_mark:                                                               | N/A                                                                              |
| `headers`                                                                        | Record<string, *string*>                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `secret`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |