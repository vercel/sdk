# ResponseBodyBlock

## Example Usage

```typescript
import { ResponseBodyBlock } from "@vercel/sdk/models/getprojectsop.js";

let value: ResponseBodyBlock = {
  action: "blocked",
  reason: "<value>",
  statusCode: 6895.26,
  createdAt: 1933.49,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `action`                                                                                           | [models.GetProjectsResponseBodyProjectsAction](../models/getprojectsresponsebodyprojectsaction.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `reason`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `statusCode`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `caseId`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `actor`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `comment`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `isCascading`                                                                                      | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |