# ThreeHundredAndEightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightySix } from "@vercel/sdk/models/usereventpayload375previous.js";

let value: ThreeHundredAndEightySix = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `actorId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `actorType`                                                                | [models.UserEventPayloadActorType](../models/usereventpayloadactortype.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |