# Preview

## Example Usage

```typescript
import { Preview } from "@vercel/sdk/models/createflagop.js";

let value: Preview = {
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
            kind: "<value>",
            attribute: "<value>",
          },
          cmp: "endsWith",
        },
      ],
      outcome: {
        type: "<value>",
        base: {
          type: "<value>",
          kind: "<value>",
          attribute: "<value>",
        },
        startTimestamp: 2189.97,
        rollFromVariantId: "<id>",
        rollToVariantId: "<id>",
        defaultVariantId: "<id>",
        slots: [],
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
    startTimestamp: 9180.41,
    rollFromVariantId: "<id>",
    rollToVariantId: "<id>",
    defaultVariantId: "<id>",
    slots: [],
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                             | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `reuse`                                                                                                                              | [models.CreateFlagFeatureFlagsReuse](../models/createflagfeatureflagsreuse.md)                                                       | :heavy_minus_sign:                                                                                                                   | Allows linking this environment to another environment so this flag will be evaluated with the other flag's configuration            |
| `targets`                                                                                                                            | Record<string, Record<string, Record<string, [models.CreateFlagFeatureFlagsTargets](../models/createflagfeatureflagstargets.md)[]>>> | :heavy_minus_sign:                                                                                                                   | Allows assigning targets to variants while bypassing the flag's rules                                                                |
| `pausedOutcome`                                                                                                                      | [models.CreateFlagFeatureFlagsPausedOutcome](../models/createflagfeatureflagspausedoutcome.md)                                       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `rules`                                                                                                                              | [models.CreateFlagFeatureFlagsRules](../models/createflagfeatureflagsrules.md)[]                                                     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fallthrough`                                                                                                                        | *models.CreateFlagFeatureFlagsFallthrough*                                                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `revision`                                                                                                                           | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The revision of the environment config                                                                                               |