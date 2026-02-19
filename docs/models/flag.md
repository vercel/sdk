# Flag

## Example Usage

```typescript
import { Flag } from "@vercel/sdk/models/flag.js";

let value: Flag = {
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
      active: true,
      rules: [],
    },
  },
  kind: "string",
  revision: 2186.56,
  seed: 8125.13,
  state: "archived",
  slug: "<value>",
  createdAt: 8307.94,
  updatedAt: 2132.63,
  createdBy: "<value>",
  ownerId: "<id>",
  projectId: "<id>",
  typeName: "flag",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `description`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `variants`                                                       | [models.Variants](../models/variants.md)[]                       | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `environments`                                                   | Record<string, [models.Environments](../models/environments.md)> | :heavy_check_mark:                                               | N/A                                                              |
| `kind`                                                           | [models.Kind](../models/kind.md)                                 | :heavy_check_mark:                                               | N/A                                                              |
| `revision`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `seed`                                                           | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `state`                                                          | [models.State](../models/state.md)                               | :heavy_check_mark:                                               | N/A                                                              |
| `slug`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `createdAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `updatedAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `createdBy`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `ownerId`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `typeName`                                                       | [models.TypeName](../models/typename.md)                         | :heavy_check_mark:                                               | N/A                                                              |
| `metadata`                                                       | [models.Metadata](../models/metadata.md)                         | :heavy_minus_sign:                                               | N/A                                                              |