# ThreeHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyTwo } from "@vercel/sdk/models/usereventpayload327geolocationmostspecificsubdivisionnames.js";

let value: ThreeHundredAndNinetyTwo = {
  totp: true,
  recoveryCodes: 4889.38,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `totp`                                                                           | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `recoveryCodes`                                                                  | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload392ActorType](../models/usereventpayload392actortype.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | Human-readable admin who performed the removal.                                  |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |