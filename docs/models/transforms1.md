# Transforms1

## Example Usage

```typescript
import { Transforms1 } from "@vercel/sdk/models/canceldeploymentdestinationdeploymentstype.js";

let value: Transforms1 = {
  op: "set",
  target: {
    key: {},
  },
  type: "response.headers",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `args`                                                                           | *models.Args*                                                                    | :heavy_minus_sign:                                                               | N/A                                                                              |
| `env`                                                                            | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `op`                                                                             | [models.CancelDeploymentTransformsOp](../models/canceldeploymenttransformsop.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `target`                                                                         | [models.TransformsTarget](../models/transformstarget.md)                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `type`                                                                           | [models.TransformsType](../models/transformstype.md)                             | :heavy_check_mark:                                                               | N/A                                                                              |