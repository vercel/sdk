# GenerateRouteRoute

## Example Usage

```typescript
import { GenerateRouteRoute } from "@vercel/sdk/models/generaterouteop.js";

let value: GenerateRouteRoute = {
  name: "<value>",
  description:
    "or steep wobbly advanced wholly for aftermath huff consequently",
  pathCondition: {
    value: "<value>",
    syntax: "regex",
  },
  actions: [],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `pathCondition`                                                                                    | [models.GenerateRoutePathCondition](../models/generateroutepathcondition.md)                       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `conditions`                                                                                       | [models.GenerateRouteProjectRoutesConditions](../models/generaterouteprojectroutesconditions.md)[] | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `actions`                                                                                          | [models.GenerateRouteActions](../models/generaterouteactions.md)[]                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |