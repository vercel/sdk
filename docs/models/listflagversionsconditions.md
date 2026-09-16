# ListFlagVersionsConditions

## Example Usage

```typescript
import { ListFlagVersionsConditions } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsConditions = {
  cmp: "contains",
  lhs: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `cmp`                                                                        | [models.ListFlagVersionsCmp](../models/listflagversionscmp.md)               | :heavy_check_mark:                                                           | N/A                                                                          |
| `cmpOptions`                                                                 | [models.ListFlagVersionsCmpOptions](../models/listflagversionscmpoptions.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `lhs`                                                                        | *models.ListFlagVersionsLhs*                                                 | :heavy_check_mark:                                                           | N/A                                                                          |
| `rhs`                                                                        | *models.ListFlagVersionsRhs*                                                 | :heavy_minus_sign:                                                           | N/A                                                                          |