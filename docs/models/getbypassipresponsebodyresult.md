# GetBypassIpResponseBodyResult

## Example Usage

```typescript
import { GetBypassIpResponseBodyResult } from "@vercel/sdk/models/getbypassipop.js";

let value: GetBypassIpResponseBodyResult = {
  ownerId: "<id>",
  id: "<id>",
  domain: "glaring-obesity.info",
  ip: "168.95.200.106",
  createdAt: "1721557649449",
  updatedAt: "1737046440191",
  updatedAtHour: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ownerId`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `domain`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `ip`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `action`                                                     | [models.ResponseBodyAction](../models/responsebodyaction.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `projectId`                                                  | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `isProjectRule`                                              | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `note`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `createdAt`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `actorId`                                                    | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `updatedAt`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `updatedAtHour`                                              | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `deletedAt`                                                  | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `expiresAt`                                                  | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |