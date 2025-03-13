# GetBypassIpResponseBodyResult

## Example Usage

```typescript
import { GetBypassIpResponseBodyResult } from "@vercel/sdk/models/getbypassipop.js";

let value: GetBypassIpResponseBodyResult = {
  ownerId: "<id>",
  id: "<id>",
  domain: "determined-hubris.net",
  ip: "dc0c:df0b:41ca:b080:5447:6f7d:3a1a:0be0",
  createdAt: "1739820235014",
  updatedAt: "1741886917295",
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
| `action`                                                                           | [models.GetBypassIpResponseBodyAction](../models/getbypassipresponsebodyaction.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `projectId`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `isProjectRule`                                                                    | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `note`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `actorId`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updatedAtHour`                                                                    | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deletedAt`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `expiresAt`                                                                        | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |