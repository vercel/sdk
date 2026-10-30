# ThreeHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtySix } from "@vercel/sdk/models/threehundredandthirtyone.js";

let value: ThreeHundredAndSixtySix = {
  connectionId: "<id>",
  actorType: "admin",
  keyId: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `connectionId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload366ActorType](../models/usereventpayload366actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `keyId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |