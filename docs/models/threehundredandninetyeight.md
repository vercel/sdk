# ThreeHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyEight } from "@vercel/sdk/models/threehundredandninetyfive.js";

let value: ThreeHundredAndNinetyEight = {
  autoBlockPrevented: true,
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `autoBlockPrevented`                                                             | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `preventUntil`                                                                   | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload398ActorType](../models/usereventpayload398actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |