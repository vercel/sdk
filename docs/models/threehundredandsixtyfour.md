# ThreeHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyFour } from "@vercel/sdk/models/threehundredandfortyone.js";

let value: ThreeHundredAndSixtyFour = {
  totp: false,
  recoveryCodes: 9052.14,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `totp`                                     | *boolean*                                  | :heavy_check_mark:                         | N/A                                        |
| `recoveryCodes`                            | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `actorId`                                  | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `actorType`                                | [models.ActorType](../models/actortype.md) | :heavy_minus_sign:                         | N/A                                        |
| `reason`                                   | *string*                                   | :heavy_minus_sign:                         | N/A                                        |