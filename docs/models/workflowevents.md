# WorkflowEvents

## Example Usage

```typescript
import { WorkflowEvents } from "@vercel/sdk/models/target.js";

let value: WorkflowEvents = {
  blockReason: "limits_exceeded",
  updatedAt: 5225.57,
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blockedFrom`                                                                                                                                              | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `blockedUntil`                                                                                                                                             | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `blockReason`                                                                                                                                              | [models.UserEventPayload174NewOwnerFeatureBlocksWorkflowEventsBlockReason](../models/usereventpayload174newownerfeatureblocksworkfloweventsblockreason.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `updatedAt`                                                                                                                                                | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |