# ThreeHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyThree } from "@vercel/sdk/models/usereventpayload372previous.js";

let value: ThreeHundredAndEightyThree = {
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