# PayloadSourceImages

## Example Usage

```typescript
import { PayloadSourceImages } from "@vercel/sdk/models/usereventpayload80deployment.js";

let value: PayloadSourceImages = {
  updatedAt: 4102.9,
  blockReason: "limits_exceeded",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `updatedAt`                                                                                                                    | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `blockedFrom`                                                                                                                  | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `blockedUntil`                                                                                                                 | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `blockReason`                                                                                                                  | [models.UserEventPayload123NewOwnerFeatureBlocksBlockReason](../models/usereventpayload123newownerfeatureblocksblockreason.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |