# CreateProjectBlock

## Example Usage

```typescript
import { CreateProjectBlock } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectBlock = {
  action: "blocked",
  reason: "<value>",
  statusCode: 5476.98,
  createdAt: 9020.13,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | [models.CreateProjectProjectsAction](../models/createprojectprojectsaction.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `reason`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `statusCode`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `caseId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `actor`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `comment`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `isCascading`                                                                  | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |