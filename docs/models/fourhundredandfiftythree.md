# FourHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyThree } from "@vercel/sdk/models/usereventpayload387scope.js";

let value: FourHundredAndFiftyThree = {
  recoveryCodes: 2294.38,
  totp: false,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | Human-readable admin who performed the removal.                                  |
| `actorType`                                                                      | [models.UserEventPayload453ActorType](../models/usereventpayload453actortype.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `recoveryCodes`                                                                  | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `totp`                                                                           | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |