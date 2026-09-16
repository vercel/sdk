# GetAllLogDrainsDelivery2

## Example Usage

```typescript
import { GetAllLogDrainsDelivery2 } from "@vercel/sdk/models/getalllogdrainsop.js";

let value: GetAllLogDrainsDelivery2 = {
  encoding: "proto",
  endpoint: {
    traces: "<value>",
  },
  headers: {},
  type: "otlphttp",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `encoding`                                                                                                                     | [models.GetAllLogDrainsDeliveryLogDrainsResponse200Encoding](../models/getalllogdrainsdeliverylogdrainsresponse200encoding.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `endpoint`                                                                                                                     | [models.GetAllLogDrainsDeliveryLogDrainsEndpoint](../models/getalllogdrainsdeliverylogdrainsendpoint.md)                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `headers`                                                                                                                      | Record<string, *string*>                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `secret`                                                                                                                       | *models.GetAllLogDrainsDeliveryLogDrainsSecret*                                                                                | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `type`                                                                                                                         | *"otlphttp"*                                                                                                                   | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |