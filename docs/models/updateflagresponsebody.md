# UpdateFlagResponseBody

## Example Usage

```typescript
import { UpdateFlagResponseBody } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagResponseBody = {
  createdAt: 1084.76,
  createdBy: "<value>",
  environments: {
    "key": {
      active: true,
      fallthrough: {
        type: "experiment",
      },
      pausedOutcome: {
        type: "variant",
        variantId: "<id>",
      },
      rules: [
        {
          conditions: [],
          id: "<id>",
          outcome: {
            base: {
              attribute: "<value>",
              kind: "<value>",
              type: "entity",
            },
            defaultVariantId: "<id>",
            rollFromVariantId: "<id>",
            rollToVariantId: "<id>",
            slots: [],
            startTimestamp: 7445.29,
            type: "rollout",
          },
        },
      ],
    },
  },
  id: "<id>",
  kind: "string",
  ownerId: "<id>",
  projectId: "<id>",
  revision: 9833.71,
  seed: 5458.06,
  slug: "<value>",
  state: "archived",
  typeName: "flag",
  updatedAt: 1677.13,
  variants: [],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdBy`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `environments`                                                                                               | Record<string, [models.UpdateFlagFeatureFlagsEnvironments](../models/updateflagfeatureflagsenvironments.md)> | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `kind`                                                                                                       | [models.UpdateFlagKind](../models/updateflagkind.md)                                                         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `maintainerIds`                                                                                              | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `ownerId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `permanent`                                                                                                  | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `projectId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `revision`                                                                                                   | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `seed`                                                                                                       | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `slug`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `state`                                                                                                      | [models.UpdateFlagFeatureFlagsState](../models/updateflagfeatureflagsstate.md)                               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `tags`                                                                                                       | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `typeName`                                                                                                   | [models.UpdateFlagTypeName](../models/updateflagtypename.md)                                                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedBy`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `variants`                                                                                                   | [models.UpdateFlagFeatureFlagsVariants](../models/updateflagfeatureflagsvariants.md)[]                       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |