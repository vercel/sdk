# EditRouteTransforms2

## Example Usage

```typescript
import { EditRouteTransforms2 } from "@vercel/sdk/models/editrouteop.js";

let value: EditRouteTransforms2 = {
  type: "request.path",
  op: "set",
  args: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *"request.path"*                                                                             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `op`                                                                                         | [models.EditRouteTransformsProjectRoutesOp](../models/editroutetransformsprojectroutesop.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `args`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `env`                                                                                        | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |