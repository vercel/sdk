# Monitoring

A soft block indicates a temporary pause in data collection (ex limit exceeded for the current cycle) A hard block indicates a stoppage in data collection that requires manual intervention (ex upgrading a pro trial)

## Example Usage

```typescript
import { Monitoring } from "@vercel/sdk/models/sourceimages.js";

let value: Monitoring = {
  blockReason: "hard_blocked",
  updatedAt: 3684.78,
  blockType: "soft",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blockedFrom`                                                                                                                                      | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `blockedUntil`                                                                                                                                     | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `blockReason`                                                                                                                                      | [models.UserEventPayload176NewOwnerFeatureBlocksMonitoringBlockReason](../models/usereventpayload176newownerfeatureblocksmonitoringblockreason.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `updatedAt`                                                                                                                                        | *number*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `blockType`                                                                                                                                        | [models.BlockType](../models/blocktype.md)                                                                                                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |