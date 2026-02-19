# CreateFlagResponseBody

## Example Usage

```typescript
import { CreateFlagResponseBody } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagResponseBody = {
  variants: [],
  id: "<id>",
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
    },
  },
  kind: "number",
  revision: 9741.71,
  seed: 7528.64,
  state: "archived",
  slug: "<value>",
  createdAt: 1157.09,
  updatedAt: 3280.67,
  createdBy: "<value>",
  ownerId: "<id>",
  projectId: "<id>",
  typeName: "flag",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `variants`                                                                                                   | [models.CreateFlagFeatureFlagsVariants](../models/createflagfeatureflagsvariants.md)[]                       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `environments`                                                                                               | Record<string, [models.CreateFlagFeatureFlagsEnvironments](../models/createflagfeatureflagsenvironments.md)> | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `kind`                                                                                                       | [models.CreateFlagFeatureFlagsKind](../models/createflagfeatureflagskind.md)                                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `revision`                                                                                                   | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `seed`                                                                                                       | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `state`                                                                                                      | [models.CreateFlagFeatureFlagsState](../models/createflagfeatureflagsstate.md)                               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `slug`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdBy`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `ownerId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `projectId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `typeName`                                                                                                   | [models.CreateFlagTypeName](../models/createflagtypename.md)                                                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |