# AddBypassIpResponseBodySecurityResult

## Example Usage

```typescript
import { AddBypassIpResponseBodySecurityResult } from "@vercel/sdk/models/addbypassipop.js";

let value: AddBypassIpResponseBodySecurityResult = {
  ownerId: "<id>",
  id: "<id>",
  domain: "flickering-accompanist.biz",
  ip: "d5f8:63df:7f72:8c2c:a5db:7f9f:a70e:42ef",
  createdAt: "1714377314552",
  updatedAt: "1737341773479",
  updatedAtHour: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `ownerId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `domain`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ip`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `action`                                                                           | [models.AddBypassIpResponseBodyAction](../models/addbypassipresponsebodyaction.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `projectId`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `isProjectRule`                                                                    | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `note`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `actorId`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updatedAtHour`                                                                    | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deletedAt`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `expiresAt`                                                                        | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |