# FourHundredAndThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyFour } from "@vercel/sdk/models/fourhundredandtwenty.js";

let value: FourHundredAndThirtyFour = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload434ActorType](../models/usereventpayload434actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |