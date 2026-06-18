# GetDrainsDeliveryDrains1

## Example Usage

```typescript
import { GetDrainsDeliveryDrains1 } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsDeliveryDrains1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "json",
  headers: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | *"http"*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `endpoint`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `encoding`                                                                                                   | [models.GetDrainsDeliveryDrainsResponse200Encoding](../models/getdrainsdeliverydrainsresponse200encoding.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `compression`                                                                                                | [models.GetDrainsDeliveryDrainsResponseCompression](../models/getdrainsdeliverydrainsresponsecompression.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `headers`                                                                                                    | Record<string, *string*>                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `secret`                                                                                                     | *models.GetDrainsDeliveryDrainsResponseSecret*                                                               | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |