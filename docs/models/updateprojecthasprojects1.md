# UpdateProjectHasProjects1

## Example Usage

```typescript
import { UpdateProjectHasProjects1 } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectHasProjects1 = {
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
| `key`                                                                                              | [models.UpdateProjectHasProjectsKey](../models/updateprojecthasprojectskey.md)                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `value`                                                                                            | [models.UpdateProjectHasProjectsResponseValue](../models/updateprojecthasprojectsresponsevalue.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |