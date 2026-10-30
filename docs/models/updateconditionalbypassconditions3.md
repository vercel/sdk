# UpdateConditionalBypassConditions3

## Example Usage

```typescript
import { UpdateConditionalBypassConditions3 } from "@vercel/sdk/models/updateconditionalbypassop.js";

let value: UpdateConditionalBypassConditions3 = {
  type: "header",
  op: "suf",
  key: "<key>",
  value: "<value>",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [models.UpdateConditionalBypassConditionsSecurityRequestType](../models/updateconditionalbypassconditionssecurityrequesttype.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `op`                                                                                                                             | [models.UpdateConditionalBypassConditionsSecurityRequestOp](../models/updateconditionalbypassconditionssecurityrequestop.md)     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `key`                                                                                                                            | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `value`                                                                                                                          | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |