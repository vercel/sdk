# ObservabilityPlus

## Example Usage

```typescript
import { ObservabilityPlus } from "@vercel/sdk/models/oldteam.js";

let value: ObservabilityPlus = {
  updatedAt: 6532.64,
  blockReason: "admin_override",
  blockType: "hard",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `updatedAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `blockedFrom`                                                                  | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `blockedUntil`                                                                 | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `blockReason`                                                                  | [models.UserEventPayloadBlockReason](../models/usereventpayloadblockreason.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `blockType`                                                                    | [models.PayloadBlockType](../models/payloadblocktype.md)                       | :heavy_check_mark:                                                             | N/A                                                                            |