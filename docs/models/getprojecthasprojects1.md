# GetProjectHasProjects1

## Example Usage

```typescript
import { GetProjectHasProjects1 } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectHasProjects1 = {
  type: "header",
  key: "x-vercel-ip-country",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *"header"*                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `key`                                                                                        | [models.GetProjectHasProjectsKey](../models/getprojecthasprojectskey.md)                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `value`                                                                                      | [models.GetProjectHasProjectsResponseValue](../models/getprojecthasprojectsresponsevalue.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |