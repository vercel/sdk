# ObservabilityPlus

## Example Usage

```typescript
import { ObservabilityPlus } from "@vercel/sdk/models/userevent.js";

let value: ObservabilityPlus = {
  blockType: "hard",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `updatedAt`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `blockedFrom`                                                                  | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `blockedUntil`                                                                 | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `blockReason`                                                                  | [models.UserEventPayloadBlockReason](../models/usereventpayloadblockreason.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `blockType`                                                                    | [models.PayloadBlockType](../models/payloadblocktype.md)                       | :heavy_check_mark:                                                             | N/A                                                                            |