# UpdateCheckResponseBody

## Example Usage

```typescript
import { UpdateCheckResponseBody } from "@vercel/sdk/models/updatecheckop.js";

let value: UpdateCheckResponseBody = {
  blocking: false,
  createdAt: 9915.54,
  deploymentId: "<id>",
  id: "<id>",
  integrationId: "<id>",
  name: "<value>",
  status: "completed",
  updatedAt: 8627.5,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `blocking`                                                                     | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `completedAt`                                                                  | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `conclusion`                                                                   | [models.UpdateCheckChecksConclusion](../models/updatecheckchecksconclusion.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `deploymentId`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `detailsUrl`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `externalId`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `integrationId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `output`                                                                       | [models.UpdateCheckChecksOutput](../models/updatecheckchecksoutput.md)         | :heavy_minus_sign:                                                             | N/A                                                                            |
| `path`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `rerequestable`                                                                | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `startedAt`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `status`                                                                       | [models.UpdateCheckChecksStatus](../models/updatecheckchecksstatus.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `updatedAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |