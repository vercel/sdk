# GetProjectsBlock

## Example Usage

```typescript
import { GetProjectsBlock } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsBlock = {
  action: "blocked",
  reason: "<value>",
  statusCode: 1867.43,
  createdAt: 388.13,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.GetProjectsProjectsAction](../models/getprojectsprojectsaction.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `statusCode`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `createdAt`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `caseId`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `actor`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `comment`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `isCascading`                                                              | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |