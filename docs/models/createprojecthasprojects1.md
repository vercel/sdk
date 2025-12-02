# CreateProjectHasProjects1

## Example Usage

```typescript
import { CreateProjectHasProjects1 } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectHasProjects1 = {
  type: "header",
  key: "x-vercel-ip-country",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | *"header"*                                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `key`                                                                                              | [models.CreateProjectHasProjectsKey](../models/createprojecthasprojectskey.md)                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `value`                                                                                            | [models.CreateProjectHasProjectsResponseValue](../models/createprojecthasprojectsresponsevalue.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |