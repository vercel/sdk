# CreateConditionalBypassSecurityConditions

## Example Usage

```typescript
import { CreateConditionalBypassSecurityConditions } from "@vercel/sdk/models/createconditionalbypassop.js";

let value: CreateConditionalBypassSecurityConditions = {
  op: "gt",
  type: "bot_status",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `key`                                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `neg`                                                                          | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `op`                                                                           | [models.CreateConditionalBypassOp](../models/createconditionalbypassop.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | [models.CreateConditionalBypassType](../models/createconditionalbypasstype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `value`                                                                        | *models.CreateConditionalBypassValue*                                          | :heavy_minus_sign:                                                             | N/A                                                                            |