# GetDrainDelivery2

## Example Usage

```typescript
import { GetDrainDelivery2 } from "@vercel/sdk/models/getdrainop.js";

let value: GetDrainDelivery2 = {
  type: "otlphttp",
  endpoint: {
    traces: "<value>",
  },
  encoding: "json",
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | [models.GetDrainDeliveryDrainsType](../models/getdraindeliverydrainstype.md)         | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `endpoint`                                                                           | [models.GetDrainDeliveryEndpoint](../models/getdraindeliveryendpoint.md)             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `encoding`                                                                           | [models.GetDrainDeliveryDrainsEncoding](../models/getdraindeliverydrainsencoding.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `headers`                                                                            | Record<string, *string*>                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `secret`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |