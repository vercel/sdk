# DrainsFilterV2

## Example Usage

```typescript
import { DrainsFilterV2 } from "@vercel/sdk/models/getdrainsop.js";

let value: DrainsFilterV2 = {
  version: "v2",
  filter: {
    type: "basic",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `version`                                          | [models.DrainsVersion](../models/drainsversion.md) | :heavy_check_mark:                                 | N/A                                                |
| `filter`                                           | *models.DrainsFilter*                              | :heavy_check_mark:                                 | N/A                                                |