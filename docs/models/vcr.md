# Vcr

## Example Usage

```typescript
import { Vcr } from "@vercel/sdk/models/previousrule.js";

let value: Vcr = {
  updatedAt: 2905.32,
  blockReason: "admin_override",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `updatedAt`                                                                                                                          | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `blockedFrom`                                                                                                                        | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `blockedUntil`                                                                                                                       | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `blockReason`                                                                                                                        | [models.UserEventPayload165NewOwnerFeatureBlocksVcrBlockReason](../models/usereventpayload165newownerfeatureblocksvcrblockreason.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |