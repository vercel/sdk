# ThreeHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyThree } from "@vercel/sdk/models/usereventpayload375previous.js";

let value: ThreeHundredAndEightyThree = {
  totp: false,
  recoveryCodes: 9540.79,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `totp`                                                   | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `recoveryCodes`                                          | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `actorId`                                                | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `actorType`                                              | [models.PayloadActorType](../models/payloadactortype.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `reason`                                                 | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |