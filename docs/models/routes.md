# Routes

## Example Usage

```typescript
import { Routes } from "@vercel/sdk/models/stageroutesop.js";

let value: Routes = {
  id: "<id>",
  name: "<value>",
  route: {
    src: "<value>",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `id`                               | *string*                           | :heavy_check_mark:                 | N/A                                |
| `name`                             | *string*                           | :heavy_check_mark:                 | N/A                                |
| `description`                      | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `enabled`                          | *boolean*                          | :heavy_minus_sign:                 | N/A                                |
| `route`                            | [models.Route](../models/route.md) | :heavy_check_mark:                 | N/A                                |