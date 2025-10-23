# Block

## Example Usage

```typescript
import { Block } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: Block = {
  action: "blocked",
  reason: "<value>",
  statusCode: 6879.18,
  createdAt: 5382.09,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `action`                                                                                         | [models.UpdateProjectDataCacheProjectsAction](../models/updateprojectdatacacheprojectsaction.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `reason`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `statusCode`                                                                                     | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `caseId`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `actor`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `comment`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `isCascading`                                                                                    | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |