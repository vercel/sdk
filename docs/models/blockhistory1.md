# BlockHistory1

## Example Usage

```typescript
import { BlockHistory1 } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: BlockHistory1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 7635.45,
  createdAt: 5035.25,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `action`                                                     | [models.BlockHistoryAction](../models/blockhistoryaction.md) | :heavy_check_mark:                                           | N/A                                                          |
| `reason`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `statusCode`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `createdAt`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `caseId`                                                     | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `actor`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `comment`                                                    | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `isCascading`                                                | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |