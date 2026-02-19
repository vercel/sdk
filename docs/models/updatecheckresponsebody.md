# UpdateCheckResponseBody

## Example Usage

```typescript
import { UpdateCheckResponseBody } from "@vercel/sdk/models/updatecheckop.js";

let value: UpdateCheckResponseBody = {
  id: "<id>",
  name: "<value>",
  createdAt: 9968.64,
  updatedAt: 9915.54,
  deploymentId: "<id>",
  status: "running",
  blocking: false,
  integrationId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updatedAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `deploymentId`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `status`                                                                       | [models.UpdateCheckChecksStatus](../models/updatecheckchecksstatus.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `conclusion`                                                                   | [models.UpdateCheckChecksConclusion](../models/updatecheckchecksconclusion.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `externalId`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `output`                                                                       | [models.UpdateCheckChecksOutput](../models/updatecheckchecksoutput.md)         | :heavy_minus_sign:                                                             | N/A                                                                            |
| `completedAt`                                                                  | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `path`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `blocking`                                                                     | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `detailsUrl`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `integrationId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `startedAt`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `rerequestable`                                                                | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |