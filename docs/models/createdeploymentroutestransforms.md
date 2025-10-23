# CreateDeploymentRoutesTransforms

## Example Usage

```typescript
import { CreateDeploymentRoutesTransforms } from "@vercel/sdk/models/createdeploymentop.js";

let value: CreateDeploymentRoutesTransforms = {
  type: "request.query",
  op: "append",
  target: {
    key: {},
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [models.RoutesType](../models/routestype.md)                             | :heavy_check_mark:                                                       | N/A                                                                      |
| `op`                                                                     | [models.CreateDeploymentRoutesOp](../models/createdeploymentroutesop.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `target`                                                                 | [models.RoutesTarget](../models/routestarget.md)                         | :heavy_check_mark:                                                       | N/A                                                                      |
| `args`                                                                   | *models.Args*                                                            | :heavy_minus_sign:                                                       | N/A                                                                      |