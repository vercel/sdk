# UpdateDrainRequestBody

## Example Usage

```typescript
import { UpdateDrainRequestBody } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainRequestBody = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `projects`                                                                   | [models.UpdateDrainProjects](../models/updatedrainprojects.md)               | :heavy_minus_sign:                                                           | N/A                                                                          |
| `projectIds`                                                                 | *string*[]                                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `filter`                                                                     | *models.UpdateDrainFilter*                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `schemas`                                                                    | Record<string, [models.UpdateDrainSchemas](../models/updatedrainschemas.md)> | :heavy_minus_sign:                                                           | N/A                                                                          |
| `delivery`                                                                   | *models.UpdateDrainDelivery*                                                 | :heavy_minus_sign:                                                           | N/A                                                                          |
| `sampling`                                                                   | [models.UpdateDrainSampling](../models/updatedrainsampling.md)[]             | :heavy_minus_sign:                                                           | N/A                                                                          |
| `transforms`                                                                 | [models.UpdateDrainTransforms](../models/updatedraintransforms.md)[]         | :heavy_minus_sign:                                                           | N/A                                                                          |
| `status`                                                                     | [models.UpdateDrainStatus](../models/updatedrainstatus.md)                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `source`                                                                     | *models.UpdateDrainSource*                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |