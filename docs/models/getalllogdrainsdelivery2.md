# GetAllLogDrainsDelivery2

## Example Usage

```typescript
import { GetAllLogDrainsDelivery2 } from "@vercel/sdk/models/getalllogdrainsop.js";

let value: GetAllLogDrainsDelivery2 = {
  type: "otlphttp",
  endpoint: {
    traces: "<value>",
  },
  encoding: "proto",
  headers: {},
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                               | [models.GetAllLogDrainsDeliveryLogDrainsResponse200ApplicationJSONType](../models/getalllogdrainsdeliverylogdrainsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `endpoint`                                                                                                                                           | [models.GetAllLogDrainsDeliveryLogDrainsEndpoint](../models/getalllogdrainsdeliverylogdrainsendpoint.md)                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `encoding`                                                                                                                                           | [models.GetAllLogDrainsDeliveryLogDrainsResponseEncoding](../models/getalllogdrainsdeliverylogdrainsresponseencoding.md)                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `headers`                                                                                                                                            | Record<string, *string*>                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `secret`                                                                                                                                             | *models.GetAllLogDrainsDeliveryLogDrainsSecret*                                                                                                      | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |