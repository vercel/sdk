# TestDrainDelivery2

## Example Usage

```typescript
import { TestDrainDelivery2 } from "@vercel/sdk/models/testdrainop.js";

let value: TestDrainDelivery2 = {
  type: "<value>",
  endpoint: {
    traces: "<value>",
  },
  encoding: "proto",
  headers: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `endpoint`                                                                             | *models.TestDrainDeliveryEndpoint*                                                     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `encoding`                                                                             | [models.TestDrainDeliveryDrainsEncoding](../models/testdraindeliverydrainsencoding.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `headers`                                                                              | Record<string, *string*>                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `secret`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |