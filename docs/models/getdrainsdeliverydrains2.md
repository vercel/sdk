# GetDrainsDeliveryDrains2

## Example Usage

```typescript
import { GetDrainsDeliveryDrains2 } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsDeliveryDrains2 = {
  encoding: "json",
  endpoint: {
    traces: "<value>",
  },
  headers: {},
  type: "otlphttp",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `encoding`                                                                                                                                 | [models.GetDrainsDeliveryDrainsResponse200ApplicationJSONEncoding](../models/getdrainsdeliverydrainsresponse200applicationjsonencoding.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `endpoint`                                                                                                                                 | [models.GetDrainsDeliveryDrainsEndpoint](../models/getdrainsdeliverydrainsendpoint.md)                                                     | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `headers`                                                                                                                                  | Record<string, *string*>                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `secret`                                                                                                                                   | *models.GetDrainsDeliveryDrainsResponse200Secret*                                                                                          | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `type`                                                                                                                                     | *"otlphttp"*                                                                                                                               | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |