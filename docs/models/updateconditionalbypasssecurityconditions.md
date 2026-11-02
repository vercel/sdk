# UpdateConditionalBypassSecurityConditions

## Example Usage

```typescript
import { UpdateConditionalBypassSecurityConditions } from "@vercel/sdk/models/updateconditionalbypassop.js";

let value: UpdateConditionalBypassSecurityConditions = {
  op: "ex",
  type: "raw_path",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `key`                                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `neg`                                                                          | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `op`                                                                           | [models.UpdateConditionalBypassOp](../models/updateconditionalbypassop.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | [models.UpdateConditionalBypassType](../models/updateconditionalbypasstype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `value`                                                                        | *models.UpdateConditionalBypassValue*                                          | :heavy_minus_sign:                                                             | N/A                                                                            |