# GetDrainsDeliveryDrains2

## Example Usage

```typescript
import { GetDrainsDeliveryDrains2 } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsDeliveryDrains2 = {
  type: "otlphttp",
  endpoint: {
    traces: "<value>",
  },
  encoding: "json",
  headers: {},
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                     | [models.GetDrainsDeliveryDrainsResponse200ApplicationJSONResponseBodyType](../models/getdrainsdeliverydrainsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `endpoint`                                                                                                                                                 | [models.GetDrainsDeliveryDrainsEndpoint](../models/getdrainsdeliverydrainsendpoint.md)                                                                     | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `encoding`                                                                                                                                                 | [models.GetDrainsDeliveryDrainsResponse200Encoding](../models/getdrainsdeliverydrainsresponse200encoding.md)                                               | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `headers`                                                                                                                                                  | Record<string, *string*>                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `secret`                                                                                                                                                   | *models.GetDrainsDeliveryDrainsResponse200Secret*                                                                                                          | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |