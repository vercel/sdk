# FourHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFifteen } from "@vercel/sdk/models/fourhundredandone.js";

let value: FourHundredAndFifteen = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload415ActorType](../models/usereventpayload415actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |