# GetBypassIpResult

## Example Usage

```typescript
import { GetBypassIpResult } from "@vercel/sdk/models/getbypassipop.js";

let value: GetBypassIpResult = {
  ownerId: "<id>",
  id: "<id>",
  domain: "tragic-shadowbox.name",
  ip: "30.247.204.204",
  createdAt: "1725444055379",
  updatedAt: "1735656633272",
  updatedAtHour: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `ownerId`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `domain`                                                   | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `ip`                                                       | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `action`                                                   | [models.GetBypassIpAction](../models/getbypassipaction.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `projectId`                                                | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `isProjectRule`                                            | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `note`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `createdAt`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `actorId`                                                  | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `updatedAt`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `updatedAtHour`                                            | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `deletedAt`                                                | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `expiresAt`                                                | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |