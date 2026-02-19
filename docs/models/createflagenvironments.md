# CreateFlagEnvironments

## Example Usage

```typescript
import { CreateFlagEnvironments } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagEnvironments = {
  active: true,
  pausedOutcome: {
    type: "<value>",
    variantId: "<id>",
  },
  rules: [
    {
      id: "<id>",
      conditions: [
        {
          lhs: {
            type: "<value>",
            kind: "<value>",
            attribute: "<value>",
          },
          cmp: "containsAllOf",
        },
      ],
      outcome: {
        type: "<value>",
        base: {
          type: "<value>",
          kind: "<value>",
          attribute: "<value>",
        },
        weights: {},
        defaultVariantId: "<id>",
      },
    },
  ],
  fallthrough: {
    type: "<value>",
    base: {
      type: "<value>",
      kind: "<value>",
      attribute: "<value>",
    },
    weights: {
      "key": 21.45,
      "key1": 2447.61,
    },
    defaultVariantId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                  | *boolean*                                                                                                                 | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `reuse`                                                                                                                   | [models.CreateFlagReuse](../models/createflagreuse.md)                                                                    | :heavy_minus_sign:                                                                                                        | Allows linking this environment to another environment so this flag will be evaluated with the other flag's configuration |
| `targets`                                                                                                                 | Record<string, Record<string, Record<string, [models.CreateFlagTargets](../models/createflagtargets.md)[]>>>              | :heavy_minus_sign:                                                                                                        | Allows assigning targets to variants while bypassing the flag's rules                                                     |
| `pausedOutcome`                                                                                                           | [models.CreateFlagPausedOutcome](../models/createflagpausedoutcome.md)                                                    | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `rules`                                                                                                                   | [models.CreateFlagRules](../models/createflagrules.md)[]                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `fallthrough`                                                                                                             | *models.CreateFlagFallthrough*                                                                                            | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `revision`                                                                                                                | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The revision of the environment config                                                                                    |