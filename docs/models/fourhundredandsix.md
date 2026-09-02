# FourHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSix } from "@vercel/sdk/models/fourhundredandthree.js";

let value: FourHundredAndSix = {
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
| `actorType`                                                                      | [models.UserEventPayload406ActorType](../models/usereventpayload406actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |