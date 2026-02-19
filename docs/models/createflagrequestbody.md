# CreateFlagRequestBody

## Example Usage

```typescript
import { CreateFlagRequestBody } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagRequestBody = {
  slug: "<value>",
  kind: "number",
  environments: {
    "key": {
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
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `slug`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores |
| `kind`                                                                                         | [models.CreateFlagKind](../models/createflagkind.md)                                           | :heavy_check_mark:                                                                             | The kind of flag                                                                               |
| `variants`                                                                                     | [models.CreateFlagVariants](../models/createflagvariants.md)[]                                 | :heavy_minus_sign:                                                                             | The variants of the flag                                                                       |
| `environments`                                                                                 | Record<string, [models.CreateFlagEnvironments](../models/createflagenvironments.md)>           | :heavy_check_mark:                                                                             | The configuration for the flag in different environments                                       |
| `seed`                                                                                         | *number*                                                                                       | :heavy_minus_sign:                                                                             | A random seed to prevent split points in different flags from having the same targets          |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | A description of the flag                                                                      |
| `state`                                                                                        | [models.CreateFlagState](../models/createflagstate.md)                                         | :heavy_minus_sign:                                                                             | N/A                                                                                            |