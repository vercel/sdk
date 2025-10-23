# UpdateDrainDeliveryDrainsResponse2

## Example Usage

```typescript
import { UpdateDrainDeliveryDrainsResponse2 } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainDeliveryDrainsResponse2 = {
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

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [models.UpdateDrainDeliveryDrainsResponse200ApplicationJSONResponseBody2Type](../models/updatedraindeliverydrainsresponse200applicationjsonresponsebody2type.md)       | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `endpoint`                                                                                                                                                             | [models.UpdateDrainDeliveryDrainsEndpoint](../models/updatedraindeliverydrainsendpoint.md)                                                                             | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `encoding`                                                                                                                                                             | [models.UpdateDrainDeliveryDrainsResponse200ApplicationJSONResponseBodyEncoding](../models/updatedraindeliverydrainsresponse200applicationjsonresponsebodyencoding.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `headers`                                                                                                                                                              | Record<string, *string*>                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `secret`                                                                                                                                                               | *string*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |