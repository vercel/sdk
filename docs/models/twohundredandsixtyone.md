# TwoHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyOne } from "@vercel/sdk/models/usereventfactors1.js";

let value: TwoHundredAndSixtyOne = {
  totp: true,
  recoveryCodes: 8556.4,
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