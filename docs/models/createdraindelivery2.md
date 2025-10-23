# CreateDrainDelivery2

## Example Usage

```typescript
import { CreateDrainDelivery2 } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainDelivery2 = {
  type: "otlphttp",
  endpoint: {
    traces: "<value>",
  },
  encoding: "proto",
  headers: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [models.CreateDrainDeliveryType](../models/createdraindeliverytype.md)                                     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `endpoint`                                                                                                 | [models.CreateDrainDeliveryDrainsEndpoint](../models/createdraindeliverydrainsendpoint.md)                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `encoding`                                                                                                 | [models.CreateDrainDeliveryDrainsResponseEncoding](../models/createdraindeliverydrainsresponseencoding.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `headers`                                                                                                  | Record<string, *string*>                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `secret`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |