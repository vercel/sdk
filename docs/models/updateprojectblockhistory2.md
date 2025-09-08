# UpdateProjectBlockHistory2

## Example Usage

```typescript
import { UpdateProjectBlockHistory2 } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectBlockHistory2 = {
  action: "unblocked",
  createdAt: 8599.47,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `action`                                                                                               | [models.UpdateProjectBlockHistoryProjectsAction](../models/updateprojectblockhistoryprojectsaction.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `createdAt`                                                                                            | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `caseId`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `actor`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `comment`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `isCascading`                                                                                          | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |