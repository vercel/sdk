# GenerateRouteRoute

## Example Usage

```typescript
import { GenerateRouteRoute } from "@vercel/sdk/models/generaterouteop.js";

let value: GenerateRouteRoute = {
  actions: [
    {
      type: "modify",
    },
  ],
  description: "outside seriously joyous",
  name: "<value>",
  pathCondition: {
    syntax: "path-to-regexp",
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `actions`                                                                                          | [models.GenerateRouteActions](../models/generaterouteactions.md)[]                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `conditions`                                                                                       | [models.GenerateRouteProjectRoutesConditions](../models/generaterouteprojectroutesconditions.md)[] | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `pathCondition`                                                                                    | [models.GenerateRoutePathCondition](../models/generateroutepathcondition.md)                       | :heavy_check_mark:                                                                                 | N/A                                                                                                |