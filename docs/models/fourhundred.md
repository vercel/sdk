# FourHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundred } from "@vercel/sdk/models/usereventpayload338budget.js";

let value: FourHundred = {
  totp: false,
  recoveryCodes: 6142.23,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `totp`                                                                           | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `recoveryCodes`                                                                  | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload400ActorType](../models/usereventpayload400actortype.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | Human-readable admin who performed the removal.                                  |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |