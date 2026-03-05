# ResponseBodyEnvironments

## Example Usage

```typescript
import { ResponseBodyEnvironments } from "@vercel/sdk/models/updateflagop.js";

let value: ResponseBodyEnvironments = {
  pausedOutcome: {
    type: "variant",
    variantId: "<id>",
  },
  fallthrough: {
    type: "variant",
    variantId: "<id>",
  },
  active: false,
  rules: [
    {
      id: "<id>",
      outcome: {
        type: "split",
        base: {
          type: "entity",
          kind: "<value>",
          attribute: "<value>",
        },
        weights: {},
        defaultVariantId: "<id>",
      },
      conditions: [],
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `reuse`                                                                                                                              | [models.ResponseBodyReuse](../models/responsebodyreuse.md)                                                                           | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `targets`                                                                                                                            | Record<string, Record<string, Record<string, [models.UpdateFlagResponseBodyTargets](../models/updateflagresponsebodytargets.md)[]>>> | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `revision`                                                                                                                           | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `pausedOutcome`                                                                                                                      | [models.ResponseBodyPausedOutcome](../models/responsebodypausedoutcome.md)                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fallthrough`                                                                                                                        | *models.ResponseBodyFallthrough*                                                                                                     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `active`                                                                                                                             | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `rules`                                                                                                                              | [models.ResponseBodyRules](../models/responsebodyrules.md)[]                                                                         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |