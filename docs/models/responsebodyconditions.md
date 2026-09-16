# ResponseBodyConditions

## Example Usage

```typescript
import { ResponseBodyConditions } from "@vercel/sdk/models/updateflagop.js";

let value: ResponseBodyConditions = {
  cmp: "!contains",
  lhs: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `cmp`                                                                | [models.ResponseBodyCmp](../models/responsebodycmp.md)               | :heavy_check_mark:                                                   | N/A                                                                  |
| `cmpOptions`                                                         | [models.ResponseBodyCmpOptions](../models/responsebodycmpoptions.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `lhs`                                                                | *models.ResponseBodyLhs*                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `rhs`                                                                | *models.ResponseBodyRhs*                                             | :heavy_minus_sign:                                                   | N/A                                                                  |