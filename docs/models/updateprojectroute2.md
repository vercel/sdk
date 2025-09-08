# UpdateProjectRoute2

## Example Usage

```typescript
import { UpdateProjectRoute2 } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectRoute2 = {
  has: [],
  mitigate: {
    action: "block_legal_cwc",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `has`                                                                        | *models.UpdateProjectRouteHas*[]                                             | :heavy_check_mark:                                                           | N/A                                                                          |
| `mitigate`                                                                   | [models.UpdateProjectRouteMitigate](../models/updateprojectroutemitigate.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `src`                                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |