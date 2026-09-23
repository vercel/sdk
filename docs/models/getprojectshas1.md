# GetProjectsHas1

## Example Usage

```typescript
import { GetProjectsHas1 } from "@vercel/sdk/models/erl.js";

let value: GetProjectsHas1 = {
  key: "x-vercel-ip-country",
  type: "header",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `key`                                                          | [models.GetProjectsHasKey](../models/getprojectshaskey.md)     | :heavy_check_mark:                                             | N/A                                                            |
| `type`                                                         | *"header"*                                                     | :heavy_check_mark:                                             | N/A                                                            |
| `value`                                                        | [models.GetProjectsHasValue](../models/getprojectshasvalue.md) | :heavy_check_mark:                                             | N/A                                                            |