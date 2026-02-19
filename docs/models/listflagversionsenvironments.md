# ListFlagVersionsEnvironments

## Example Usage

```typescript
import { ListFlagVersionsEnvironments } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsEnvironments = {
  pausedOutcome: {
    type: "variant",
    variantId: "<id>",
  },
  fallthrough: {
    type: "variant",
    variantId: "<id>",
  },
  active: true,
  rules: [
    {
      id: "<id>",
      outcome: {
        type: "variant",
        variantId: "<id>",
      },
      conditions: [],
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `reuse`                                                                                                                  | [models.ListFlagVersionsReuse](../models/listflagversionsreuse.md)                                                       | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `targets`                                                                                                                | Record<string, Record<string, Record<string, [models.ListFlagVersionsTargets](../models/listflagversionstargets.md)[]>>> | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `revision`                                                                                                               | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `pausedOutcome`                                                                                                          | [models.ListFlagVersionsPausedOutcome](../models/listflagversionspausedoutcome.md)                                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `fallthrough`                                                                                                            | *models.ListFlagVersionsFallthrough*                                                                                     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `active`                                                                                                                 | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `rules`                                                                                                                  | [models.ListFlagVersionsRules](../models/listflagversionsrules.md)[]                                                     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |