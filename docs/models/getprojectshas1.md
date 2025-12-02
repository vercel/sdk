# GetProjectsHas1

## Example Usage

```typescript
import { GetProjectsHas1 } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsHas1 = {
  type: "header",
  key: "x-vercel-ip-country",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | *"header"*                                                     | :heavy_check_mark:                                             | N/A                                                            |
| `key`                                                          | [models.GetProjectsHasKey](../models/getprojectshaskey.md)     | :heavy_check_mark:                                             | N/A                                                            |
| `value`                                                        | [models.GetProjectsHasValue](../models/getprojectshasvalue.md) | :heavy_check_mark:                                             | N/A                                                            |