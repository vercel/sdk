# Route

## Example Usage

```typescript
import { Route } from "@vercel/sdk/models/stageroutesop.js";

let value: Route = {
  src: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `src`                                                                | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `dest`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `headers`                                                            | [models.StageRoutesHeaders](../models/stageroutesheaders.md)         | :heavy_minus_sign:                                                   | N/A                                                                  |
| `caseSensitive`                                                      | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `status`                                                             | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `has`                                                                | [models.StageRoutesHas](../models/stagerouteshas.md)[]               | :heavy_minus_sign:                                                   | N/A                                                                  |
| `missing`                                                            | [models.Missing](../models/missing.md)[]                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `transforms`                                                         | [models.StageRoutesTransforms](../models/stageroutestransforms.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |
| `respectOriginCacheControl`                                          | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |