# Route2

## Example Usage

```typescript
import { Route2 } from "@vercel/sdk/models/createprojectop.js";

let value: Route2 = {
  has: [],
  mitigate: {
    action: "block_legal_cwc",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `has`                                              | *models.RouteHas*[]                                | :heavy_check_mark:                                 | N/A                                                |
| `mitigate`                                         | [models.RouteMitigate](../models/routemitigate.md) | :heavy_check_mark:                                 | N/A                                                |
| `src`                                              | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |