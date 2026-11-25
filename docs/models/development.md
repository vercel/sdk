# Development

## Example Usage

```typescript
import { Development } from "@vercel/sdk/models/createflagop.js";

let value: Development = {
  active: false,
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
          },
          cmp: "!oneOf",
        },
      ],
      outcome: {
        type: "<value>",
        variantId: "<id>",
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
    startTimestamp: 3578.38,
    rollFromVariantId: "<id>",
    rollToVariantId: "<id>",
    defaultVariantId: "<id>",
    slots: [
      {
        promille: 7580.59,
        durationMs: 5072.29,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                           | *boolean*                                                                                                                                          | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `reuse`                                                                                                                                            | [models.CreateFlagFeatureFlagsRequestReuse](../models/createflagfeatureflagsrequestreuse.md)                                                       | :heavy_minus_sign:                                                                                                                                 | Allows linking this environment to another environment so this flag will be evaluated with the other flag's configuration                          |
| `targets`                                                                                                                                          | Record<string, Record<string, Record<string, [models.CreateFlagFeatureFlagsRequestTargets](../models/createflagfeatureflagsrequesttargets.md)[]>>> | :heavy_minus_sign:                                                                                                                                 | Allows assigning targets to variants while bypassing the flag's rules                                                                              |
| `pausedOutcome`                                                                                                                                    | [models.CreateFlagFeatureFlagsRequestPausedOutcome](../models/createflagfeatureflagsrequestpausedoutcome.md)                                       | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `rules`                                                                                                                                            | [models.CreateFlagFeatureFlagsRequestRules](../models/createflagfeatureflagsrequestrules.md)[]                                                     | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `fallthrough`                                                                                                                                      | *models.CreateFlagFeatureFlagsRequestFallthrough*                                                                                                  | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `revision`                                                                                                                                         | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The revision of the environment config                                                                                                             |