# ThreeHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyEight } from "@vercel/sdk/models/usereventpayload385project.js";

let value: ThreeHundredAndNinetyEight = {
  keyId: "<id>",
  signingEnabled: true,
  signingKeyId: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `connectionId`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload398ActorType](../models/usereventpayload398actortype.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `keyId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `signingEnabled`                                                                 | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `signingKeyId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |