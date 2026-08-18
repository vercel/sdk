# SpeedInsightsFree

Pauses Speed Insights free data-point ingestion when the team-wide free allocation is exhausted. The block lasts at least 14 days and is extended while rolling usage stays above half of the allocation.

## Example Usage

```typescript
import { SpeedInsightsFree } from "@vercel/sdk/models/onehundredandthirtyfour.js";

let value: SpeedInsightsFree = {
  updatedAt: 1033.47,
  blockReason: "limits_exceeded",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `updatedAt`                                                                                                                                                      | *number*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `blockedFrom`                                                                                                                                                    | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |
| `blockedUntil`                                                                                                                                                   | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |
| `blockReason`                                                                                                                                                    | [models.UserEventPayload162NewOwnerFeatureBlocksSpeedInsightsFreeBlockReason](../models/usereventpayload162newownerfeatureblocksspeedinsightsfreeblockreason.md) | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |