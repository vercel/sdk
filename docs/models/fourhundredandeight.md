# FourHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEight } from "@vercel/sdk/models/fourhundredandseven.js";

let value: FourHundredAndEight = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload408ActorType](../models/usereventpayload408actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |