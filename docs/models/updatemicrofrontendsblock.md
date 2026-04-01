# UpdateMicrofrontendsBlock

## Example Usage

```typescript
import { UpdateMicrofrontendsBlock } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsBlock = {
  action: "blocked",
  reason: "<value>",
  statusCode: 4945.04,
  createdAt: 3575.37,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `action`                                                                                     | [models.UpdateMicrofrontendsProjectsAction](../models/updatemicrofrontendsprojectsaction.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `reason`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `statusCode`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `caseId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `actor`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `comment`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `ineligibleForAppeal`                                                                        | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `isCascading`                                                                                | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |