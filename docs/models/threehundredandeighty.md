# ThreeHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEighty } from "@vercel/sdk/models/usereventpayload372previous.js";

let value: ThreeHundredAndEighty = {
  totp: true,
  recoveryCodes: 4538.98,
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