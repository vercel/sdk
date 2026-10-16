# ThreeHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyFour } from "@vercel/sdk/models/threehundredandfourteen.js";

let value: ThreeHundredAndFiftyFour = {
  connectionId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `connectionId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload354ActorType](../models/usereventpayload354actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |