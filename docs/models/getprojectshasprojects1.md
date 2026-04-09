# GetProjectsHasProjects1

## Example Usage

```typescript
import { GetProjectsHasProjects1 } from "@vercel/sdk/models/getprojectslogheaders2.js";

let value: GetProjectsHasProjects1 = {
  type: "header",
  key: "x-vercel-ip-country",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | *"header"*                                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `key`                                                                                          | [models.GetProjectsHasProjectsKey](../models/getprojectshasprojectskey.md)                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `value`                                                                                        | [models.GetProjectsHasProjectsResponseValue](../models/getprojectshasprojectsresponsevalue.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |