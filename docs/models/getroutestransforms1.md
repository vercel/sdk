# GetRoutesTransforms1

## Example Usage

```typescript
import { GetRoutesTransforms1 } from "@vercel/sdk/models/getroutesop.js";

let value: GetRoutesTransforms1 = {
  op: "append",
  target: {
    key: {},
  },
  type: "response.headers",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `args`                                                                     | *models.GetRoutesTransformsArgs*                                           | :heavy_minus_sign:                                                         | N/A                                                                        |
| `env`                                                                      | *string*[]                                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `op`                                                                       | [models.GetRoutesTransformsOp](../models/getroutestransformsop.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `target`                                                                   | [models.GetRoutesTransformsTarget](../models/getroutestransformstarget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | [models.GetRoutesTransformsType](../models/getroutestransformstype.md)     | :heavy_check_mark:                                                         | N/A                                                                        |