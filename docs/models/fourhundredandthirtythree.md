# FourHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyThree } from "@vercel/sdk/models/fourhundredandseventeen.js";

let value: FourHundredAndThirtyThree = {
  actorId: "<id>",
  actorType: "admin",
  autoBlockPrevented: true,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload433ActorType](../models/usereventpayload433actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `autoBlockPrevented`                                                             | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `preventUntil`                                                                   | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |