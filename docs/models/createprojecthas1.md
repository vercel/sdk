# CreateProjectHas1

## Example Usage

```typescript
import { CreateProjectHas1 } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectHas1 = {
  type: "header",
  key: "x-vercel-ip-country",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | [models.CreateProjectHasType](../models/createprojecthastype.md)   | :heavy_check_mark:                                                 | N/A                                                                |
| `key`                                                              | [models.HasKey](../models/haskey.md)                               | :heavy_check_mark:                                                 | N/A                                                                |
| `value`                                                            | [models.CreateProjectHasValue](../models/createprojecthasvalue.md) | :heavy_check_mark:                                                 | N/A                                                                |