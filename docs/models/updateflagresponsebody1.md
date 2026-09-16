# UpdateFlagResponseBody1

## Example Usage

```typescript
import { UpdateFlagResponseBody1 } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagResponseBody1 = {
  createdAt: 1415.47,
  createdBy: "<value>",
  environments: {},
  id: "<id>",
  kind: "string",
  ownerId: "<id>",
  projectId: "<id>",
  revision: 9662.69,
  seed: 4558.32,
  slug: "<value>",
  state: "archived",
  typeName: "flag",
  updatedAt: 5171.38,
  variants: [
    {
      id: "<id>",
      value: {
        "0": "<value 1>",
        "1": "<value 2>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `createdAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdBy`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `environments`                                                                           | Record<string, [models.ResponseBodyEnvironments](../models/responsebodyenvironments.md)> | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `kind`                                                                                   | [models.ResponseBodyKind](../models/responsebodykind.md)                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `maintainerIds`                                                                          | *string*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `ownerId`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `permanent`                                                                              | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `projectId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `revision`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `seed`                                                                                   | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `slug`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `state`                                                                                  | [models.ResponseBodyState](../models/responsebodystate.md)                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `tags`                                                                                   | *string*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `typeName`                                                                               | [models.ResponseBodyTypeName](../models/responsebodytypename.md)                         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedBy`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `variants`                                                                               | [models.ResponseBodyVariants](../models/responsebodyvariants.md)[]                       | :heavy_check_mark:                                                                       | N/A                                                                                      |