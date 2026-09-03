# ThreeHundredAndNinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetySeven } from "@vercel/sdk/models/usereventpayload335budget.js";

let value: ThreeHundredAndNinetySeven = {
  totp: true,
  recoveryCodes: 9380.8,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `totp`                                                                           | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `recoveryCodes`                                                                  | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload397ActorType](../models/usereventpayload397actortype.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | Human-readable admin who performed the removal.                                  |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |