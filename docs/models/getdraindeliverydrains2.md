# GetDrainDeliveryDrains2

## Example Usage

```typescript
import { GetDrainDeliveryDrains2 } from "@vercel/sdk/models/getdrainop.js";

let value: GetDrainDeliveryDrains2 = {
  encoding: "json",
  endpoint: {
    traces: "<value>",
  },
  headers: {
    "key": "<value>",
  },
  type: "otlphttp",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `encoding`                                                                                                                               | [models.GetDrainDeliveryDrainsResponse200ApplicationJSONEncoding](../models/getdraindeliverydrainsresponse200applicationjsonencoding.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `endpoint`                                                                                                                               | [models.GetDrainDeliveryDrainsEndpoint](../models/getdraindeliverydrainsendpoint.md)                                                     | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `headers`                                                                                                                                | Record<string, *string*>                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `secret`                                                                                                                                 | *models.GetDrainDeliveryDrainsResponse200Secret*                                                                                         | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `type`                                                                                                                                   | *"otlphttp"*                                                                                                                             | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |