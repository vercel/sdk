# ThreeHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyEight } from "@vercel/sdk/models/threehundredandninetysix.js";

let value: ThreeHundredAndNinetyEight = {
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
| `actorType`                                                                      | [models.UserEventPayload398ActorType](../models/usereventpayload398actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |