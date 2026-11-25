# CreateFlagRequestBody

## Example Usage

```typescript
import { CreateFlagRequestBody } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagRequestBody = {
  environments: {
    production: {
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
              cmp: "gt",
            },
          ],
          outcome: {
            type: "<value>",
            base: {
              type: "<value>",
              kind: "<value>",
              attribute: "<value>",
            },
            weights: {
              "key": 6502.53,
            },
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
        startTimestamp: 5176.11,
        rollFromVariantId: "<id>",
        rollToVariantId: "<id>",
        defaultVariantId: "<id>",
        slots: [],
      },
    },
    preview: {
      active: false,
      pausedOutcome: {
        type: "<value>",
        variantId: "<id>",
      },
      rules: [],
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
    },
    development: {
      active: true,
      pausedOutcome: {
        type: "<value>",
        variantId: "<id>",
      },
      rules: [],
      fallthrough: {
        type: "<value>",
        variantId: "<id>",
      },
    },
  },
  slug: "<value>",
  kind: "json",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `environments`                                                                                 | [models.CreateFlagEnvironments](../models/createflagenvironments.md)                           | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `slug`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores |
| `kind`                                                                                         | [models.CreateFlagKind](../models/createflagkind.md)                                           | :heavy_check_mark:                                                                             | The kind of flag                                                                               |
| `variants`                                                                                     | [models.CreateFlagVariants](../models/createflagvariants.md)[]                                 | :heavy_minus_sign:                                                                             | The variants of the flag                                                                       |
| `seed`                                                                                         | *number*                                                                                       | :heavy_minus_sign:                                                                             | A random seed to prevent split points in different flags from having the same targets          |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | A description of the flag                                                                      |
| `state`                                                                                        | [models.CreateFlagState](../models/createflagstate.md)                                         | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `maintainerIds`                                                                                | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | The user ids of the maintainers of the flag                                                    |
| `permanent`                                                                                    | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Whether this flag is marked as permanent, indicating it should not be removed                  |
| `tags`                                                                                         | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | Tags for categorizing the flag                                                                 |