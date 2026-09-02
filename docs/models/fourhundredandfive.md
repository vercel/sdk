# FourHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFive } from "@vercel/sdk/models/fourhundredandthree.js";

let value: FourHundredAndFive = {
  enabled: false,
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload405ActorType](../models/usereventpayload405actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |