# ResponseBodyEnvironments

## Example Usage

```typescript
import { ResponseBodyEnvironments } from "@vercel/sdk/models/updateflagop.js";

let value: ResponseBodyEnvironments = {
  active: true,
  fallthrough: {
    base: {
      attribute: "<value>",
      kind: "<value>",
      type: "entity",
    },
    defaultVariantId: "<id>",
    rollFromVariantId: "<id>",
    rollToVariantId: "<id>",
    slots: [
      {
        durationMs: 2920.38,
        promille: 2566.4,
      },
    ],
    startTimestamp: 7560.07,
    type: "rollout",
  },
  pausedOutcome: {
    type: "variant",
    variantId: "<id>",
  },
  rules: [],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                             | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fallthrough`                                                                                                                        | *models.ResponseBodyFallthrough*                                                                                                     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `pausedOutcome`                                                                                                                      | [models.ResponseBodyPausedOutcome](../models/responsebodypausedoutcome.md)                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `reuse`                                                                                                                              | [models.ResponseBodyReuse](../models/responsebodyreuse.md)                                                                           | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `revision`                                                                                                                           | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `rules`                                                                                                                              | [models.ResponseBodyRules](../models/responsebodyrules.md)[]                                                                         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `targets`                                                                                                                            | Record<string, Record<string, Record<string, [models.UpdateFlagResponseBodyTargets](../models/updateflagresponsebodytargets.md)[]>>> | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |