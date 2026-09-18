# WorkflowEvents

## Example Usage

```typescript
import { WorkflowEvents } from "@vercel/sdk/models/nextrule.js";

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
| `blockReason`                                                                                                                                              | [models.UserEventPayload172NewOwnerFeatureBlocksWorkflowEventsBlockReason](../models/usereventpayload172newownerfeatureblocksworkfloweventsblockreason.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `updatedAt`                                                                                                                                                | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |