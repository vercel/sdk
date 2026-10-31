# ThreeHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyEight } from "@vercel/sdk/models/threehundredandthirtytwo.js";

let value: ThreeHundredAndSixtyEight = {
  connectionId: "<id>",
  actorType: "admin",
  keyId: "<id>",
  signingEnabled: false,
  signingKeyId: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `connectionId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload368ActorType](../models/usereventpayload368actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `keyId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `signingEnabled`                                                                 | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `signingKeyId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |