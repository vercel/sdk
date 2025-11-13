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

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                   | [models.GetDrainDeliveryDrainsResponse200ApplicationJSONResponseBodyType](../models/getdraindeliverydrainsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `endpoint`                                                                                                                                               | [models.GetDrainDeliveryDrainsEndpoint](../models/getdraindeliverydrainsendpoint.md)                                                                     | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `encoding`                                                                                                                                               | [models.GetDrainDeliveryDrainsResponse200Encoding](../models/getdraindeliverydrainsresponse200encoding.md)                                               | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `headers`                                                                                                                                                | Record<string, *string*>                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `secret`                                                                                                                                                 | *models.GetDrainDeliveryDrainsResponse200Secret*                                                                                                         | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |