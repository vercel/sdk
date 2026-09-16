# CreateFlagResponseBody

## Example Usage

```typescript
import { CreateFlagResponseBody } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagResponseBody = {
  createdAt: 3387.46,
  createdBy: "<value>",
  environments: {
    "key": {
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
            durationMs: 4653.32,
            promille: 9741.71,
          },
        ],
        startTimestamp: 7528.64,
        type: "rollout",
      },
      pausedOutcome: {
        type: "variant",
        variantId: "<id>",
      },
      rules: [
        {
          conditions: [
            {
              cmp: "oneOf",
              lhs: {
                type: "segment",
              },
            },
          ],
          id: "<id>",
          outcome: {
            type: "variant",
            variantId: "<id>",
          },
        },
      ],
    },
  },
  id: "<id>",
  kind: "boolean",
  ownerId: "<id>",
  projectId: "<id>",
  revision: 3280.67,
  seed: 6761.09,
  slug: "<value>",
  state: "archived",
  typeName: "flag",
  updatedAt: 1352.12,
  variants: [],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdBy`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `environments`                                                                                               | Record<string, [models.CreateFlagFeatureFlagsEnvironments](../models/createflagfeatureflagsenvironments.md)> | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `kind`                                                                                                       | [models.CreateFlagFeatureFlagsKind](../models/createflagfeatureflagskind.md)                                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `maintainerIds`                                                                                              | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `ownerId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `permanent`                                                                                                  | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `projectId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `revision`                                                                                                   | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `seed`                                                                                                       | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `slug`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `state`                                                                                                      | [models.CreateFlagFeatureFlagsState](../models/createflagfeatureflagsstate.md)                               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `tags`                                                                                                       | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `typeName`                                                                                                   | [models.CreateFlagTypeName](../models/createflagtypename.md)                                                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedBy`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `variants`                                                                                                   | [models.CreateFlagFeatureFlagsVariants](../models/createflagfeatureflagsvariants.md)[]                       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |