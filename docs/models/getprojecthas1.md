# GetProjectHas1

## Example Usage

```typescript
import { GetProjectHas1 } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectHas1 = {
  type: "header",
  key: "x-vercel-ip-country",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *"header"*                                                   | :heavy_check_mark:                                           | N/A                                                          |
| `key`                                                        | [models.HasKey](../models/haskey.md)                         | :heavy_check_mark:                                           | N/A                                                          |
| `value`                                                      | [models.GetProjectHasValue](../models/getprojecthasvalue.md) | :heavy_check_mark:                                           | N/A                                                          |