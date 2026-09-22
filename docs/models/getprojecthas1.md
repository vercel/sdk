# GetProjectHas1

## Example Usage

```typescript
import { GetProjectHas1 } from "@vercel/sdk/models/getprojectfrom2.js";

let value: GetProjectHas1 = {
  key: "x-vercel-ip-country",
  type: "header",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `key`                                                        | [models.HasKey](../models/haskey.md)                         | :heavy_check_mark:                                           | N/A                                                          |
| `type`                                                       | *"header"*                                                   | :heavy_check_mark:                                           | N/A                                                          |
| `value`                                                      | [models.GetProjectHasValue](../models/getprojecthasvalue.md) | :heavy_check_mark:                                           | N/A                                                          |