# ResponseBodyResult

## Example Usage

```typescript
import { ResponseBodyResult } from "@vercel/sdk/models/getbypassipop.js";

let value: ResponseBodyResult = {
  ownerId: "<id>",
  id: "<id>",
  domain: "stylish-antelope.com",
  ip: "ca3a:ee0a:0f9f:866a:4dcf:f4f1:0ef3:9acd",
  createdAt: "1736591387147",
  updatedAt: "1743656173050",
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