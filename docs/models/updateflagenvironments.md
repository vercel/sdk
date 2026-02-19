# UpdateFlagEnvironments

## Example Usage

```typescript
import { UpdateFlagEnvironments } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagEnvironments = {
  active: false,
  pausedOutcome: {
    type: "<value>",
    variantId: "<id>",
  },
  rules: [
    {
      id: "<id>",
      conditions: [],
      outcome: {
        type: "<value>",
        base: {
          type: "<value>",
          kind: "<value>",
          attribute: "<value>",
        },
        weights: {
          "key": 1111.57,
        },
        defaultVariantId: "<id>",
      },
    },
  ],
  fallthrough: {
    type: "<value>",
    variantId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                  | *boolean*                                                                                                                 | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `reuse`                                                                                                                   | [models.UpdateFlagReuse](../models/updateflagreuse.md)                                                                    | :heavy_minus_sign:                                                                                                        | Allows linking this environment to another environment so this flag will be evaluated with the other flag's configuration |
| `targets`                                                                                                                 | Record<string, Record<string, Record<string, [models.UpdateFlagTargets](../models/updateflagtargets.md)[]>>>              | :heavy_minus_sign:                                                                                                        | Allows assigning targets to variants while bypassing the flag's rules                                                     |
| `pausedOutcome`                                                                                                           | [models.UpdateFlagPausedOutcome](../models/updateflagpausedoutcome.md)                                                    | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `rules`                                                                                                                   | [models.UpdateFlagRules](../models/updateflagrules.md)[]                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `fallthrough`                                                                                                             | *models.UpdateFlagFallthrough*                                                                                            | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `revision`                                                                                                                | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The revision of the environment config                                                                                    |