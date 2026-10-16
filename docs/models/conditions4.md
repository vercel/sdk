# Conditions4

## Example Usage

```typescript
import { Conditions4 } from "@vercel/sdk/models/createconditionalbypassop.js";

let value: Conditions4 = {
  type: "header",
  op: "ex",
  key: "<key>",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [models.CreateConditionalBypassConditionsSecurityRequestType](../models/createconditionalbypassconditionssecurityrequesttype.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `op`                                                                                                                             | [models.CreateConditionalBypassConditionsSecurityRequestOp](../models/createconditionalbypassconditionssecurityrequestop.md)     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `key`                                                                                                                            | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |