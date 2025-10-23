# CreateDrainDeliveryDrains2

## Example Usage

```typescript
import { CreateDrainDeliveryDrains2 } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainDeliveryDrains2 = {
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

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                         | [models.CreateDrainDeliveryDrainsResponse200ApplicationJSONResponseBodyType](../models/createdraindeliverydrainsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `endpoint`                                                                                                                                                     | [models.CreateDrainDeliveryEndpoint](../models/createdraindeliveryendpoint.md)                                                                                 | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `encoding`                                                                                                                                                     | [models.CreateDrainDeliveryDrainsResponse200ApplicationJSONEncoding](../models/createdraindeliverydrainsresponse200applicationjsonencoding.md)                 | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `headers`                                                                                                                                                      | Record<string, *string*>                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `secret`                                                                                                                                                       | *string*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |