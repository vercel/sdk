# Conditions

## Example Usage

```typescript
import { Conditions } from "@vercel/sdk/models/flag.js";

let value: Conditions = {
  cmp: "contains",
  lhs: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `cmp`                                        | [models.Cmp](../models/cmp.md)               | :heavy_check_mark:                           | N/A                                          |
| `cmpOptions`                                 | [models.CmpOptions](../models/cmpoptions.md) | :heavy_minus_sign:                           | N/A                                          |
| `lhs`                                        | *models.Lhs*                                 | :heavy_check_mark:                           | N/A                                          |
| `rhs`                                        | *models.Rhs*                                 | :heavy_minus_sign:                           | N/A                                          |