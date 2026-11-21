# FourHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyOne } from "@vercel/sdk/models/fourhundredandthirtynine.js";

let value: FourHundredAndNinetyOne = {
  recoveryCodes: 6480,
  totp: true,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | Human-readable admin who performed the removal.                                  |
| `actorType`                                                                      | [models.UserEventPayload491ActorType](../models/usereventpayload491actortype.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `recoveryCodes`                                                                  | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `totp`                                                                           | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |