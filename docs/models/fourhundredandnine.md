# FourHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNine } from "@vercel/sdk/models/fourhundredandeight.js";

let value: FourHundredAndNine = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload409ActorType](../models/usereventpayload409actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |