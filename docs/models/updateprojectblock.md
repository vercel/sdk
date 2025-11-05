# UpdateProjectBlock

## Example Usage

```typescript
import { UpdateProjectBlock } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectBlock = {
  action: "blocked",
  reason: "<value>",
  statusCode: 1321.96,
  createdAt: 4951.18,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `action`                                                                                       | [models.UpdateProjectProjectsResponseAction](../models/updateprojectprojectsresponseaction.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `reason`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `statusCode`                                                                                   | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `caseId`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `actor`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `comment`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `isCascading`                                                                                  | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |