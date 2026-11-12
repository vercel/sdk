# FourHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyOne } from "@vercel/sdk/models/usereventpayload474actortype.js";

let value: FourHundredAndEightyOne = {
  actorId: "<id>",
  actorType: "admin",
  autoBlockPrevented: true,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload481ActorType](../models/usereventpayload481actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `autoBlockPrevented`                                                             | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `preventUntil`                                                                   | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |