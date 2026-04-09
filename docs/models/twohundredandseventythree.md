# TwoHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyThree } from "@vercel/sdk/models/twohundredandtwentyseven.js";

let value: TwoHundredAndSeventyThree = {
  totp: true,
  recoveryCodes: 3422.39,
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