# GetRoutesResponseBodyTransforms

## Example Usage

```typescript
import { GetRoutesResponseBodyTransforms } from "@vercel/sdk/models/getroutesop.js";

let value: GetRoutesResponseBodyTransforms = {
  type: "request.headers",
  op: "append",
  target: {
    key: "<key>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [models.GetRoutesResponseBodyProjectRoutesType](../models/getroutesresponsebodyprojectroutestype.md)     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `op`                                                                                                     | [models.GetRoutesResponseBodyOp](../models/getroutesresponsebodyop.md)                                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `target`                                                                                                 | [models.GetRoutesResponseBodyProjectRoutesTarget](../models/getroutesresponsebodyprojectroutestarget.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `args`                                                                                                   | *models.GetRoutesResponseBodyArgs*                                                                       | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `env`                                                                                                    | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |