# RoutesTransforms

## Example Usage

```typescript
import { RoutesTransforms } from "@vercel/sdk/models/canceldeploymentop.js";

let value: RoutesTransforms = {
  type: "response.headers",
  op: "append",
  target: {
    key: "<key>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | [models.CancelDeploymentRoutesType](../models/canceldeploymentroutestype.md)     | :heavy_check_mark:                                                               | N/A                                                                              |
| `op`                                                                             | [models.RoutesOp](../models/routesop.md)                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `target`                                                                         | [models.CancelDeploymentRoutesTarget](../models/canceldeploymentroutestarget.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `args`                                                                           | *models.RoutesArgs*                                                              | :heavy_minus_sign:                                                               | N/A                                                                              |
| `env`                                                                            | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |