# Flag

## Example Usage

```typescript
import { Flag } from "@vercel/sdk/models/flag.js";

let value: Flag = {
  createdAt: 5233.11,
  createdBy: "<value>",
  environments: {},
  id: "<id>",
  kind: "string",
  ownerId: "<id>",
  projectId: "<id>",
  revision: 7245.99,
  seed: 4797.93,
  slug: "<value>",
  state: "archived",
  typeName: "flag",
  updatedAt: 6977.76,
  variants: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `createdAt`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `createdBy`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `environments`                                                           | Record<string, [models.FlagEnvironments](../models/flagenvironments.md)> | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `kind`                                                                   | [models.Kind](../models/kind.md)                                         | :heavy_check_mark:                                                       | N/A                                                                      |
| `maintainerIds`                                                          | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `ownerId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `permanent`                                                              | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `revision`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `seed`                                                                   | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `slug`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `state`                                                                  | [models.State](../models/state.md)                                       | :heavy_check_mark:                                                       | N/A                                                                      |
| `tags`                                                                   | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `typeName`                                                               | [models.TypeName](../models/typename.md)                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `updatedAt`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `updatedBy`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `variants`                                                               | [models.Variants](../models/variants.md)[]                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `metadata`                                                               | [models.Metadata](../models/metadata.md)                                 | :heavy_minus_sign:                                                       | N/A                                                                      |