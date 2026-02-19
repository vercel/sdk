# CreateProjectCheckRequestBody

## Example Usage

```typescript
import { CreateProjectCheckRequestBody } from "@vercel/sdk/models/createprojectcheckop.js";

let value: CreateProjectCheckRequestBody = {
  name: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `name`                                   | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `isRerequestable`                        | *boolean*                                | :heavy_minus_sign:                       | N/A                                      |
| `requires`                               | [models.Requires](../models/requires.md) | :heavy_minus_sign:                       | N/A                                      |
| `targets`                                | *string*[]                               | :heavy_minus_sign:                       | N/A                                      |
| `blocks`                                 | [models.Blocks](../models/blocks.md)     | :heavy_minus_sign:                       | N/A                                      |
| `source`                                 | *models.CreateProjectCheckSource*        | :heavy_minus_sign:                       | N/A                                      |
| `timeout`                                | *number*                                 | :heavy_minus_sign:                       | N/A                                      |