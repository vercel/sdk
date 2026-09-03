# ConfigurationPlanItemQuantities

The current plan item quantities

## Example Usage

```typescript
import { ConfigurationPlanItemQuantities } from "@vercel/sdk/models/buycreditsop.js";

let value: ConfigurationPlanItemQuantities = {
  planItemId: "<id>",
  quantity: 5829.2,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `planItemId`                                                    | *string*                                                        | :heavy_check_mark:                                              | The ID of the current plan item to set the quantity for         |
| `quantity`                                                      | *number*                                                        | :heavy_check_mark:                                              | The nonnegative integer quantity for the current plan item      |
| `resourceIds`                                                   | *string*[]                                                      | :heavy_minus_sign:                                              | The resource IDs associated with the current plan item quantity |