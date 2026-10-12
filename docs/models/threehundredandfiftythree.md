# ThreeHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyThree } from "@vercel/sdk/models/threehundredandeight.js";

let value: ThreeHundredAndFiftyThree = {
  connectionId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `connectionId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload353ActorType](../models/usereventpayload353actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |