# ThreeHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixty } from "@vercel/sdk/models/threehundredandthirtyseven.js";

let value: ThreeHundredAndSixty = {
  totp: false,
  recoveryCodes: 9195.85,
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