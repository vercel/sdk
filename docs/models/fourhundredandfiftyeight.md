# FourHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyEight } from "@vercel/sdk/models/fourhundredandfifty.js";

let value: FourHundredAndFiftyEight = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload458ActorType](../models/usereventpayload458actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |