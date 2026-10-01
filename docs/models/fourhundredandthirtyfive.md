# FourHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyFive } from "@vercel/sdk/models/fourhundredandtwenty.js";

let value: FourHundredAndThirtyFive = {
  actorId: "<id>",
  actorType: "admin",
  enabled: true,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload435ActorType](../models/usereventpayload435actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |