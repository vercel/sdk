# ListFlagVersionsData

## Example Usage

```typescript
import { ListFlagVersionsData } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsData = {
  variants: [
    {
      value: "<value>",
      id: "<id>",
    },
  ],
  environments: {
    "key": {
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
    },
  },
  seed: 2298.63,
  state: "active",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `variants`                                                                                       | [models.ListFlagVersionsVariants](../models/listflagversionsvariants.md)[]                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `environments`                                                                                   | Record<string, [models.ListFlagVersionsEnvironments](../models/listflagversionsenvironments.md)> | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `seed`                                                                                           | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `state`                                                                                          | [models.ListFlagVersionsState](../models/listflagversionsstate.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |