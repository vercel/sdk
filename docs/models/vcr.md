# Vcr

## Example Usage

```typescript
import { Vcr } from "@vercel/sdk/models/job6.js";

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
| `blockReason`                                                                                                                        | [models.UserEventPayload155NewOwnerFeatureBlocksVcrBlockReason](../models/usereventpayload155newownerfeatureblocksvcrblockreason.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |