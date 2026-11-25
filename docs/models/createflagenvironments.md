# CreateFlagEnvironments

## Example Usage

```typescript
import { CreateFlagEnvironments } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagEnvironments = {
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
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `production`                                   | [models.Production](../models/production.md)   | :heavy_check_mark:                             | N/A                                            |
| `preview`                                      | [models.Preview](../models/preview.md)         | :heavy_check_mark:                             | N/A                                            |
| `development`                                  | [models.Development](../models/development.md) | :heavy_check_mark:                             | N/A                                            |