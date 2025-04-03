# Monitoring

A soft block indicates a temporary pause in data collection (ex limit exceeded for the current cycle) A hard block indicates a stoppage in data collection that requires manual intervention (ex upgrading a pro trial)

## Example Usage

```typescript
import { Monitoring } from "@vercel/sdk/models/userevent.js";

let value: Monitoring = {
  blockType: "hard",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `updatedAt`                                                  | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `blockedFrom`                                                | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `blockedUntil`                                               | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `blockReason`                                                | [models.PayloadBlockReason](../models/payloadblockreason.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `blockType`                                                  | [models.BlockType](../models/blocktype.md)                   | :heavy_check_mark:                                           | N/A                                                          |