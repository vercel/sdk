# FiveHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThree } from "@vercel/sdk/models/fourhundredandfortyfour.js";

let value: FiveHundredAndThree = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload503ActorType](../models/usereventpayload503actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |