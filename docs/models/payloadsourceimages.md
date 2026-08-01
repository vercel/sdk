# PayloadSourceImages

## Example Usage

```typescript
import { PayloadSourceImages } from "@vercel/sdk/models/microfrontendsrequest.js";

let value: PayloadSourceImages = {
  updatedAt: 4102.9,
  blockReason: "hard_blocked",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `updatedAt`                                                                                                                    | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `blockedFrom`                                                                                                                  | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `blockedUntil`                                                                                                                 | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `blockReason`                                                                                                                  | [models.UserEventPayload155NewOwnerFeatureBlocksBlockReason](../models/usereventpayload155newownerfeatureblocksblockreason.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |