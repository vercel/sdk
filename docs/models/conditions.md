# Conditions

## Example Usage

```typescript
import { Conditions } from "@vercel/sdk/models/flag.js";

let value: Conditions = {
  lhs: {
    type: "segment",
  },
  cmp: "contains",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `rhs`                                        | *models.Rhs*                                 | :heavy_minus_sign:                           | N/A                                          |
| `cmpOptions`                                 | [models.CmpOptions](../models/cmpoptions.md) | :heavy_minus_sign:                           | N/A                                          |
| `lhs`                                        | *models.Lhs*                                 | :heavy_check_mark:                           | N/A                                          |
| `cmp`                                        | [models.Cmp](../models/cmp.md)               | :heavy_check_mark:                           | N/A                                          |