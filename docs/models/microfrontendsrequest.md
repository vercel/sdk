# MicrofrontendsRequest

## Example Usage

```typescript
import { MicrofrontendsRequest } from "@vercel/sdk/models/sourceimages.js";

let value: MicrofrontendsRequest = {
  blockReason: "admin_override",
  updatedAt: 642.78,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `blockedFrom`                                                                                                                  | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `blockedUntil`                                                                                                                 | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `blockReason`                                                                                                                  | [models.UserEventPayload176NewOwnerFeatureBlocksBlockReason](../models/usereventpayload176newownerfeatureblocksblockreason.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `updatedAt`                                                                                                                    | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |