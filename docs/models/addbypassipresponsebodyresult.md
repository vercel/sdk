# AddBypassIpResponseBodyResult

## Example Usage

```typescript
import { AddBypassIpResponseBodyResult } from "@vercel/sdk/models/addbypassipop.js";

let value: AddBypassIpResponseBodyResult = {
  ownerId: "<id>",
  id: "<id>",
  domain: "smoggy-stay.org",
  ip: "6790:5eac:ac3c:a40b:0fa7:9c4e:a11e:e65b",
  createdAt: "1718435597440",
  updatedAt: "1735646889076",
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