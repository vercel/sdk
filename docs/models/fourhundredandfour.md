# FourHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFour } from "@vercel/sdk/models/fourhundredandtwo.js";

let value: FourHundredAndFour = {
  enabled: true,
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload404ActorType](../models/usereventpayload404actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |