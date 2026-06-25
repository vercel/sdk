# GetRoutesTransforms2

## Example Usage

```typescript
import { GetRoutesTransforms2 } from "@vercel/sdk/models/getroutesop.js";

let value: GetRoutesTransforms2 = {
  type: "request.path",
  op: "set",
  args: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *"request.path"*                                                                             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `op`                                                                                         | [models.GetRoutesTransformsProjectRoutesOp](../models/getroutestransformsprojectroutesop.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `args`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `env`                                                                                        | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |