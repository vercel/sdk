# CreateCheckResponseBody

## Example Usage

```typescript
import { CreateCheckResponseBody } from "@vercel/sdk/models/createcheckop.js";

let value: CreateCheckResponseBody = {
  id: "chk_1a2b3c4d5e6f7g8h9i0j",
  name: "Performance Check",
  path: "/api/users",
  status: "completed",
  conclusion: "succeeded",
  blocking: false,
  integrationId: "<id>",
  deploymentId: "<id>",
  createdAt: 641.47,
  updatedAt: 6924.72,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | chk_1a2b3c4d5e6f7g8h9i0j                                           |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | Performance Check                                                  |
| `path`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | /api/users                                                         |
| `status`                                                           | [models.CreateCheckStatus](../models/createcheckstatus.md)         | :heavy_check_mark:                                                 | N/A                                                                | completed                                                          |
| `conclusion`                                                       | [models.CreateCheckConclusion](../models/createcheckconclusion.md) | :heavy_minus_sign:                                                 | N/A                                                                | succeeded                                                          |
| `blocking`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `output`                                                           | [models.CreateCheckOutput](../models/createcheckoutput.md)         | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `detailsUrl`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `integrationId`                                                    | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `deploymentId`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `externalId`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `createdAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `updatedAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `startedAt`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `completedAt`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `rerequestable`                                                    | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |