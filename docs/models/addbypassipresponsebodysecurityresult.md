# AddBypassIpResponseBodySecurityResult

## Example Usage

```typescript
import { AddBypassIpResponseBodySecurityResult } from "@vercel/sdk/models/addbypassipop.js";

let value: AddBypassIpResponseBodySecurityResult = {
  ownerId: "<id>",
  id: "<id>",
  domain: "nice-avalanche.biz",
  ip: "ecdf:aac2:fb3f:7ddb:2c7f:dc7a:fba0:fc56",
  createdAt: "1726077881328",
  updatedAt: "1741744358938",
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