# PayloadSourceImages

## Example Usage

```typescript
import { PayloadSourceImages } from "@vercel/sdk/models/userevent.js";

let value: PayloadSourceImages = {
  updatedAt: 4884.33,
  blockReason: "limits_exceeded",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `updatedAt`                                                                                                                  | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `blockedFrom`                                                                                                                | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `blockedUntil`                                                                                                               | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `blockReason`                                                                                                                | [models.UserEventPayload62NewOwnerFeatureBlocksBlockReason](../models/usereventpayload62newownerfeatureblocksblockreason.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |