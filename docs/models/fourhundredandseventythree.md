# FourHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyThree } from "@vercel/sdk/models/payloadcodereviewselection.js";

let value: FourHundredAndSeventyThree = {
  recoveryCodes: 5949.13,
  totp: true,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | Human-readable admin who performed the removal.                                  |
| `actorType`                                                                      | [models.UserEventPayload473ActorType](../models/usereventpayload473actortype.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `recoveryCodes`                                                                  | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `totp`                                                                           | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |