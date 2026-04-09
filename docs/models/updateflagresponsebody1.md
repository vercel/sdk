# UpdateFlagResponseBody1

## Example Usage

```typescript
import { UpdateFlagResponseBody1 } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagResponseBody1 = {
  variants: [],
  id: "<id>",
  environments: {},
  kind: "json",
  revision: 9662.69,
  seed: 4558.32,
  state: "archived",
  slug: "<value>",
  createdAt: 5171.38,
  updatedAt: 5365.64,
  createdBy: "<value>",
  ownerId: "<id>",
  projectId: "<id>",
  typeName: "flag",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `permanent`                                                                              | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `tags`                                                                                   | *string*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `experiment`                                                                             | [models.ResponseBodyExperiment](../models/responsebodyexperiment.md)                     | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `variants`                                                                               | [models.ResponseBodyVariants](../models/responsebodyvariants.md)[]                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `environments`                                                                           | Record<string, [models.ResponseBodyEnvironments](../models/responsebodyenvironments.md)> | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `kind`                                                                                   | [models.ResponseBodyKind](../models/responsebodykind.md)                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `revision`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `seed`                                                                                   | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `state`                                                                                  | [models.ResponseBodyState](../models/responsebodystate.md)                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `slug`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdBy`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `ownerId`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `projectId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `typeName`                                                                               | [models.ResponseBodyTypeName](../models/responsebodytypename.md)                         | :heavy_check_mark:                                                                       | N/A                                                                                      |