# ThreeHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyFive } from "@vercel/sdk/models/usereventpayload325project.js";

let value: ThreeHundredAndSixtyFive = {
  connectionId: "<id>",
  actorType: "admin",
  keyId: "<id>",
  signingEnabled: true,
  signingKeyId: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `connectionId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload365ActorType](../models/usereventpayload365actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `keyId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `signingEnabled`                                                                 | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `signingKeyId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |