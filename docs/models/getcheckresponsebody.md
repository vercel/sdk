# GetCheckResponseBody

## Example Usage

```typescript
import { GetCheckResponseBody } from "@vercel/sdk/models/getcheckop.js";

let value: GetCheckResponseBody = {
  blocking: true,
  createdAt: 6834.12,
  deploymentId: "<id>",
  id: "<id>",
  integrationId: "<id>",
  name: "<value>",
  status: "completed",
  updatedAt: 4676.2,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `blocking`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `completedAt`                                                | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `conclusion`                                                 | [models.GetCheckConclusion](../models/getcheckconclusion.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `createdAt`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `deploymentId`                                               | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `detailsUrl`                                                 | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `externalId`                                                 | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `integrationId`                                              | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `output`                                                     | [models.GetCheckOutput](../models/getcheckoutput.md)         | :heavy_minus_sign:                                           | N/A                                                          |
| `path`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `rerequestable`                                              | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `startedAt`                                                  | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `status`                                                     | [models.GetCheckStatus](../models/getcheckstatus.md)         | :heavy_check_mark:                                           | N/A                                                          |
| `updatedAt`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |