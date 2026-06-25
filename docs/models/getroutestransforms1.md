# GetRoutesTransforms1

## Example Usage

```typescript
import { GetRoutesTransforms1 } from "@vercel/sdk/models/getroutesop.js";

let value: GetRoutesTransforms1 = {
  type: "request.headers",
  op: "delete",
  target: {
    key: {},
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [models.GetRoutesTransformsType](../models/getroutestransformstype.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `op`                                                                       | [models.GetRoutesTransformsOp](../models/getroutestransformsop.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `target`                                                                   | [models.GetRoutesTransformsTarget](../models/getroutestransformstarget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `args`                                                                     | *models.GetRoutesTransformsArgs*                                           | :heavy_minus_sign:                                                         | N/A                                                                        |
| `env`                                                                      | *string*[]                                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |