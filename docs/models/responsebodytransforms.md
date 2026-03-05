# ResponseBodyTransforms

## Example Usage

```typescript
import { ResponseBodyTransforms } from "@vercel/sdk/models/getroutesop.js";

let value: ResponseBodyTransforms = {
  type: "request.headers",
  op: "set",
  target: {
    key: {},
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [models.GetRoutesResponseBodyType](../models/getroutesresponsebodytype.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `op`                                                                           | [models.ResponseBodyOp](../models/responsebodyop.md)                           | :heavy_check_mark:                                                             | N/A                                                                            |
| `target`                                                                       | [models.GetRoutesResponseBodyTarget](../models/getroutesresponsebodytarget.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `args`                                                                         | *models.ResponseBodyArgs*                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `env`                                                                          | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |