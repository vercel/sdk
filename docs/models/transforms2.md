# Transforms2

## Example Usage

```typescript
import { Transforms2 } from "@vercel/sdk/models/servicesop.js";

let value: Transforms2 = {
  args: "<value>",
  op: "set",
  type: "request.path",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `args`                                           | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `env`                                            | *string*[]                                       | :heavy_minus_sign:                               | N/A                                              |
| `op`                                             | [models.TransformsOp](../models/transformsop.md) | :heavy_check_mark:                               | N/A                                              |
| `type`                                           | *"request.path"*                                 | :heavy_check_mark:                               | N/A                                              |