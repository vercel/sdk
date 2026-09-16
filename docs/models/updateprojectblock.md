# UpdateProjectBlock

## Example Usage

```typescript
import { UpdateProjectBlock } from "@vercel/sdk/models/updateprojectdefinitions.js";

let value: UpdateProjectBlock = {
  action: "blocked",
  createdAt: 1321.96,
  reason: "<value>",
  statusCode: 4951.18,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `action`                                                                                             | [models.UpdateProjectProjectsResponse200Action](../models/updateprojectprojectsresponse200action.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `actor`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `caseId`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `comment`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `ineligibleForAppeal`                                                                                | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `isCascading`                                                                                        | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `reason`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `statusCode`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |