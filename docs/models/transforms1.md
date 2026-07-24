# Transforms1

## Example Usage

```typescript
import { Transforms1 } from "@vercel/sdk/models/canceldeploymentservicesdeploymentsfunctions.js";

let value: Transforms1 = {
  type: "response.headers",
  op: "set",
  target: {
    key: {},
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | [models.TransformsType](../models/transformstype.md)                             | :heavy_check_mark:                                                               | N/A                                                                              |
| `op`                                                                             | [models.CancelDeploymentTransformsOp](../models/canceldeploymenttransformsop.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `target`                                                                         | [models.TransformsTarget](../models/transformstarget.md)                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `args`                                                                           | *models.Args*                                                                    | :heavy_minus_sign:                                                               | N/A                                                                              |
| `env`                                                                            | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |