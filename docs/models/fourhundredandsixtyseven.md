# FourHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtySeven } from "@vercel/sdk/models/usereventpayload458actortype.js";

let value: FourHundredAndSixtySeven = {
  actorId: "<id>",
  actorType: "admin",
  autoBlockPrevented: true,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload467ActorType](../models/usereventpayload467actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `autoBlockPrevented`                                                             | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `preventUntil`                                                                   | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |