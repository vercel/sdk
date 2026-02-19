# CreateFlagConditions

## Example Usage

```typescript
import { CreateFlagConditions } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagConditions = {
  lhs: {
    type: "<value>",
  },
  cmp: "!endsWith",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `lhs`                                              | *models.CreateFlagLhs*                             | :heavy_check_mark:                                 | N/A                                                |
| `cmp`                                              | [models.CreateFlagCmp](../models/createflagcmp.md) | :heavy_check_mark:                                 | N/A                                                |
| `rhs`                                              | *models.CreateFlagRhs*                             | :heavy_minus_sign:                                 | N/A                                                |