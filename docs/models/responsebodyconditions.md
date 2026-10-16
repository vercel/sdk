# ResponseBodyConditions

## Example Usage

```typescript
import { ResponseBodyConditions } from "@vercel/sdk/models/getconditionalbypassop.js";

let value: ResponseBodyConditions = {
  op: "eq",
  type: "server_action",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `key`                                                                                            | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `neg`                                                                                            | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `op`                                                                                             | [models.ResponseBodyOp](../models/responsebodyop.md)                                             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `type`                                                                                           | [models.GetConditionalBypassResponseBodyType](../models/getconditionalbypassresponsebodytype.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `value`                                                                                          | *models.GetConditionalBypassResponseBodyValue*                                                   | :heavy_minus_sign:                                                                               | N/A                                                                                              |