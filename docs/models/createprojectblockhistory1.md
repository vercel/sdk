# CreateProjectBlockHistory1

## Example Usage

```typescript
import { CreateProjectBlockHistory1 } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectBlockHistory1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 5274.55,
  createdAt: 3444.61,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `action`                                                                               | [models.CreateProjectBlockHistoryAction](../models/createprojectblockhistoryaction.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `reason`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `statusCode`                                                                           | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `caseId`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `actor`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `comment`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `isCascading`                                                                          | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |