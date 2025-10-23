# GetDrainDeliveryDrains2

## Example Usage

```typescript
import { GetDrainDeliveryDrains2 } from "@vercel/sdk/models/getdrainop.js";

let value: GetDrainDeliveryDrains2 = {
  type: "otlphttp",
  endpoint: {
    traces: "<value>",
  },
  encoding: "json",
  headers: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                     | [models.GetDrainDeliveryDrainsResponse200ApplicationJSONResponseBody2Type](../models/getdraindeliverydrainsresponse200applicationjsonresponsebody2type.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `endpoint`                                                                                                                                                 | [models.GetDrainDeliveryDrainsEndpoint](../models/getdraindeliverydrainsendpoint.md)                                                                       | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `encoding`                                                                                                                                                 | [models.GetDrainDeliveryDrainsResponse200Encoding](../models/getdraindeliverydrainsresponse200encoding.md)                                                 | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `headers`                                                                                                                                                  | Record<string, *string*>                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `secret`                                                                                                                                                   | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |