# ThreeHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyThree } from "@vercel/sdk/models/threehundredandsixtytwo.js";

let value: ThreeHundredAndSeventyThree = {
  totp: true,
  recoveryCodes: 7963.8,
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