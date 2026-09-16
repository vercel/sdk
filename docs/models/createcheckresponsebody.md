# CreateCheckResponseBody

## Example Usage

```typescript
import { CreateCheckResponseBody } from "@vercel/sdk/models/createcheckop.js";

let value: CreateCheckResponseBody = {
  blocking: true,
  conclusion: "succeeded",
  createdAt: 5556.21,
  deploymentId: "<id>",
  id: "chk_1a2b3c4d5e6f7g8h9i0j",
  integrationId: "<id>",
  name: "Performance Check",
  path: "/api/users",
  status: "completed",
  updatedAt: 5185.69,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `blocking`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `completedAt`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `conclusion`                                                       | [models.CreateCheckConclusion](../models/createcheckconclusion.md) | :heavy_minus_sign:                                                 | N/A                                                                | succeeded                                                          |
| `createdAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `deploymentId`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `detailsUrl`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `externalId`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | chk_1a2b3c4d5e6f7g8h9i0j                                           |
| `integrationId`                                                    | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | Performance Check                                                  |
| `output`                                                           | [models.CreateCheckOutput](../models/createcheckoutput.md)         | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `path`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | /api/users                                                         |
| `rerequestable`                                                    | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `startedAt`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `status`                                                           | [models.CreateCheckStatus](../models/createcheckstatus.md)         | :heavy_check_mark:                                                 | N/A                                                                | completed                                                          |
| `updatedAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |