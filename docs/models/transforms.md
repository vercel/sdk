# Transforms

## Example Usage

```typescript
import { Transforms } from "@vercel/sdk/models/createdeploymentop.js";

let value: Transforms = {
  type: "request.headers",
  op: "set",
  target: {
    key: "<key>",
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