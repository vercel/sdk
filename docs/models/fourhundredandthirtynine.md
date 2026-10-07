# FourHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyNine } from "@vercel/sdk/models/fourhundredandtwentythree.js";

let value: FourHundredAndThirtyNine = {
  actorId: "<id>",
  actorType: "admin",
  autoBlockPrevented: false,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload439ActorType](../models/usereventpayload439actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `autoBlockPrevented`                                                             | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `preventUntil`                                                                   | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |