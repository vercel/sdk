# ResponseBodyConditions

## Example Usage

```typescript
import { ResponseBodyConditions } from "@vercel/sdk/models/updateflagop.js";

let value: ResponseBodyConditions = {
  lhs: {
    type: "segment",
  },
  cmp: "regex",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `rhs`                                                                | *models.ResponseBodyRhs*                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `cmpOptions`                                                         | [models.ResponseBodyCmpOptions](../models/responsebodycmpoptions.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `lhs`                                                                | *models.ResponseBodyLhs*                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `cmp`                                                                | [models.ResponseBodyCmp](../models/responsebodycmp.md)               | :heavy_check_mark:                                                   | N/A                                                                  |