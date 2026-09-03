# PayloadSpeedInsightsFree

Pauses Speed Insights free data-point ingestion when the team-wide free allocation is exhausted. The block lasts at least 14 days and is extended while rolling usage stays above half of the allocation.

## Example Usage

```typescript
import { PayloadSpeedInsightsFree } from "@vercel/sdk/models/onehundredandfortyseven.js";

let value: PayloadSpeedInsightsFree = {
  updatedAt: 8502.87,
  blockReason: "admin_override",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `updatedAt`                                                                                                                                                      | *number*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `blockedFrom`                                                                                                                                                    | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |
| `blockedUntil`                                                                                                                                                   | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |
| `blockReason`                                                                                                                                                    | [models.UserEventPayload166NewOwnerFeatureBlocksSpeedInsightsFreeBlockReason](../models/usereventpayload166newownerfeatureblocksspeedinsightsfreeblockreason.md) | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |