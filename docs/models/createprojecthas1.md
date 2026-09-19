# CreateProjectHas1

## Example Usage

```typescript
import { CreateProjectHas1 } from "@vercel/sdk/models/createprojecttier.js";

let value: CreateProjectHas1 = {
  key: "x-vercel-ip-country",
  type: "header",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `key`                                                              | [models.CreateProjectHasKey](../models/createprojecthaskey.md)     | :heavy_check_mark:                                                 | N/A                                                                |
| `type`                                                             | *"header"*                                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `value`                                                            | [models.CreateProjectHasValue](../models/createprojecthasvalue.md) | :heavy_check_mark:                                                 | N/A                                                                |