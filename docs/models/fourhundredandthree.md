# FourHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThree } from "@vercel/sdk/models/fourhundredandtwo.js";

let value: FourHundredAndThree = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload403ActorType](../models/usereventpayload403actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |