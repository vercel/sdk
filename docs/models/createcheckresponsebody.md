# CreateCheckResponseBody

## Example Usage

```typescript
import { CreateCheckResponseBody } from "@vercel/sdk/models/createcheckop.js";

let value: CreateCheckResponseBody = {
  id: "chk_1a2b3c4d5e6f7g8h9i0j",
  name: "Performance Check",
  createdAt: 1030.55,
  updatedAt: 5556.21,
  deploymentId: "<id>",
  status: "completed",
  conclusion: "succeeded",
  path: "/api/users",
  blocking: false,
  integrationId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | chk_1a2b3c4d5e6f7g8h9i0j                                           |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | Performance Check                                                  |
| `createdAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `updatedAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `deploymentId`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `status`                                                           | [models.CreateCheckStatus](../models/createcheckstatus.md)         | :heavy_check_mark:                                                 | N/A                                                                | completed                                                          |
| `conclusion`                                                       | [models.CreateCheckConclusion](../models/createcheckconclusion.md) | :heavy_minus_sign:                                                 | N/A                                                                | succeeded                                                          |
| `externalId`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `output`                                                           | [models.CreateCheckOutput](../models/createcheckoutput.md)         | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `completedAt`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `path`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | /api/users                                                         |
| `blocking`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `detailsUrl`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `integrationId`                                                    | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `startedAt`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `rerequestable`                                                    | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |