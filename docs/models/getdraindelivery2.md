# GetDrainDelivery2

## Example Usage

```typescript
import { GetDrainDelivery2 } from "@vercel/sdk/models/getdrainop.js";

let value: GetDrainDelivery2 = {
  encoding: "json",
  endpoint: {
    traces: "<value>",
  },
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
  type: "otlphttp",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `encoding`                                                                           | [models.GetDrainDeliveryDrainsEncoding](../models/getdraindeliverydrainsencoding.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `endpoint`                                                                           | [models.GetDrainDeliveryEndpoint](../models/getdraindeliveryendpoint.md)             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `headers`                                                                            | Record<string, *string*>                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `secret`                                                                             | *models.GetDrainDeliveryDrainsSecret*                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `type`                                                                               | *"otlphttp"*                                                                         | :heavy_check_mark:                                                                   | N/A                                                                                  |