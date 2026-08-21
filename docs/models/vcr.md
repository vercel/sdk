# Vcr

## Example Usage

```typescript
import { Vcr } from "@vercel/sdk/models/toaccount.js";

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
| `blockReason`                                                                                                                        | [models.UserEventPayload163NewOwnerFeatureBlocksVcrBlockReason](../models/usereventpayload163newownerfeatureblocksvcrblockreason.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |