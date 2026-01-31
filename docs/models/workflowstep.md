# WorkflowStep

## Example Usage

```typescript
import { WorkflowStep } from "@vercel/sdk/models/userevent.js";

let value: WorkflowStep = {
  updatedAt: 8580.48,
  blockReason: "admin_override",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `updatedAt`                                                                                                                                          | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `blockedFrom`                                                                                                                                        | *number*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `blockedUntil`                                                                                                                                       | *number*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `blockReason`                                                                                                                                        | [models.UserEventPayload76NewOwnerFeatureBlocksWorkflowStepBlockReason](../models/usereventpayload76newownerfeatureblocksworkflowstepblockreason.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |