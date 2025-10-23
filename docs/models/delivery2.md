# Delivery2

## Example Usage

```typescript
import { Delivery2 } from "@vercel/sdk/models/createdrainop.js";

let value: Delivery2 = {
  type: "<value>",
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `endpoint`                                                                     | *models.Endpoint*                                                              | :heavy_check_mark:                                                             | N/A                                                                            |
| `encoding`                                                                     | [models.CreateDrainDeliveryEncoding](../models/createdraindeliveryencoding.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `headers`                                                                      | Record<string, *string*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `secret`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |