# GetOrderResponseBody

Success

## Example Usage

```typescript
import { GetOrderResponseBody } from "@vercel/sdk/models/getorderop.js";

let value: GetOrderResponseBody = {
  orderId: "<id>",
  domains: [],
  status: "draft",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `orderId`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `domains`                                            | *models.GetOrderDomains*[]                           | :heavy_check_mark:                                   | N/A                                                  |
| `status`                                             | [models.GetOrderStatus](../models/getorderstatus.md) | :heavy_check_mark:                                   | N/A                                                  |
| `error`                                              | *models.GetOrderError*                               | :heavy_minus_sign:                                   | N/A                                                  |