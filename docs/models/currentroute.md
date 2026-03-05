# CurrentRoute

## Example Usage

```typescript
import { CurrentRoute } from "@vercel/sdk/models/generaterouteop.js";

let value: CurrentRoute = {
  pathCondition: {},
  actions: [
    {},
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `pathCondition`                                                          | [models.PathCondition](../models/pathcondition.md)                       | :heavy_check_mark:                                                       | N/A                                                                      |
| `conditions`                                                             | [models.GenerateRouteConditions](../models/generaterouteconditions.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |
| `actions`                                                                | [models.Actions](../models/actions.md)[]                                 | :heavy_check_mark:                                                       | N/A                                                                      |