# GetBypassIpResult

## Example Usage

```typescript
import { GetBypassIpResult } from "@vercel/sdk/models/getbypassipop.js";

let value: GetBypassIpResult = {
  createdAt: "1731377995782",
  domain: "straight-marten.biz",
  id: "<id>",
  ip: "247.204.204.172",
  ownerId: "<id>",
  updatedAt: "1735656633272",
  updatedAtHour: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `action`                                                   | [models.GetBypassIpAction](../models/getbypassipaction.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `actorId`                                                  | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `createdAt`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `deletedAt`                                                | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `domain`                                                   | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `expiresAt`                                                | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `ip`                                                       | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `isProjectRule`                                            | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `note`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `ownerId`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `projectId`                                                | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `updatedAt`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `updatedAtHour`                                            | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |