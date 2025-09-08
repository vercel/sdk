# UpdateProjectHas1

## Example Usage

```typescript
import { UpdateProjectHas1 } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectHas1 = {
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
| `type`                                                             | [models.UpdateProjectHasType](../models/updateprojecthastype.md)   | :heavy_check_mark:                                                 | N/A                                                                |
| `key`                                                              | [models.UpdateProjectHasKey](../models/updateprojecthaskey.md)     | :heavy_check_mark:                                                 | N/A                                                                |
| `value`                                                            | [models.UpdateProjectHasValue](../models/updateprojecthasvalue.md) | :heavy_check_mark:                                                 | N/A                                                                |