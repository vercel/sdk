# SpeedInsightsFree

Client-facing view of the `speedInsightsFree` ingestion block. The dashboard needs `blockReason` to tell usage pauses apart from admin blocks.

## Example Usage

```typescript
import { SpeedInsightsFree } from "@vercel/sdk/models/authuser.js";

let value: SpeedInsightsFree = {
  blockReason: "admin_override",
  isCurrentlyBlocked: false,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `blockedFrom`                                  | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `blockedUntil`                                 | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `blockReason`                                  | [models.BlockReason](../models/blockreason.md) | :heavy_check_mark:                             | N/A                                            |
| `isCurrentlyBlocked`                           | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |