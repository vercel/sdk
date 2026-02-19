# UpdateFlagConditions

## Example Usage

```typescript
import { UpdateFlagConditions } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagConditions = {
  lhs: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  cmp: "oneOf",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `lhs`                                              | *models.UpdateFlagLhs*                             | :heavy_check_mark:                                 | N/A                                                |
| `cmp`                                              | [models.UpdateFlagCmp](../models/updateflagcmp.md) | :heavy_check_mark:                                 | N/A                                                |
| `rhs`                                              | *models.UpdateFlagRhs*                             | :heavy_minus_sign:                                 | N/A                                                |