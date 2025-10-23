# CreateDrainRequestBody

## Example Usage

```typescript
import { CreateDrainRequestBody } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainRequestBody = {
  name: "<value>",
  projects: "some",
  schemas: {
    "key": {
      version: "<value>",
    },
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `projects`                                                     | [models.CreateDrainProjects](../models/createdrainprojects.md) | :heavy_check_mark:                                             | N/A                                                            |
| `projectIds`                                                   | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `filter`                                                       | *models.Filter*                                                | :heavy_minus_sign:                                             | N/A                                                            |
| `schemas`                                                      | Record<string, [models.Schemas](../models/schemas.md)>         | :heavy_check_mark:                                             | N/A                                                            |
| `delivery`                                                     | *models.Delivery*                                              | :heavy_minus_sign:                                             | N/A                                                            |
| `sampling`                                                     | [models.Sampling](../models/sampling.md)[]                     | :heavy_minus_sign:                                             | N/A                                                            |
| `transforms`                                                   | [models.Transforms](../models/transforms.md)[]                 | :heavy_minus_sign:                                             | N/A                                                            |
| `source`                                                       | *models.CreateDrainSource*                                     | :heavy_minus_sign:                                             | N/A                                                            |