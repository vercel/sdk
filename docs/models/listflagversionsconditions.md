# ListFlagVersionsConditions

## Example Usage

```typescript
import { ListFlagVersionsConditions } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsConditions = {
  lhs: {
    type: "segment",
  },
  cmp: "!regex",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `rhs`                                                          | *models.ListFlagVersionsRhs*                                   | :heavy_minus_sign:                                             | N/A                                                            |
| `lhs`                                                          | *models.ListFlagVersionsLhs*                                   | :heavy_check_mark:                                             | N/A                                                            |
| `cmp`                                                          | [models.ListFlagVersionsCmp](../models/listflagversionscmp.md) | :heavy_check_mark:                                             | N/A                                                            |